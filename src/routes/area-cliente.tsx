import { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { 
  LogOut, 
  Trash2, 
  PlusCircle, 
  Lock, 
  Mail, 
  User, 
  Calendar, 
  Activity, 
  MessageSquare, 
  ArrowLeft 
} from "lucide-react";
import { supabase, type Review } from "@/lib/supabase";

export const Route = createFileRoute("/area-cliente")({
  component: AreaCliente,
});

// Schemas de Validação Zod
const loginSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

const reviewSchema = z.object({
  titulo: z.string().min(3, "Título muito curto"),
  comentario: z.string().min(10, "Comentário deve ter no mínimo 10 caracteres"),
  nome_cliente: z.string().min(3, "Nome é obrigatório"),
  data_nascimento: z.string().nonempty("Data de nascimento é obrigatória"),
  procedimento: z.string().min(3, "Procedimento é obrigatório"),
});

type LoginForm = z.infer<typeof loginSchema>;
type ReviewForm = z.infer<typeof reviewSchema>;

function AreaCliente() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [submitting, setSubmitting] = useState(false);

  // Forms
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors, isSubmitting: isLoggingIn },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const {
    register: registerReview,
    handleSubmit: handleSubmitReview,
    reset: resetReviewForm,
    formState: { errors: reviewErrors },
  } = useForm<ReviewForm>({ resolver: zodResolver(reviewSchema) });

  // 1. Checar Sessão e Autenticação
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) fetchUserReviews(session.user.id);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchUserReviews(session.user.id);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Buscar Avaliações do Usuário
  const fetchUserReviews = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (err: any) {
      toast.error("Erro ao carregar avaliações: " + err.message);
    }
  };

  // 3. Handlers do Auth
  const onLogin = async (data: LoginForm) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;
      toast.success("Login realizado com sucesso!");
    } catch (err: any) {
      toast.error(err.message || "Falha na autenticação");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.info("Você deslogou da conta.");
    navigate({ to: "/" });
  };

  // 4. Criar Avaliação
  const onCreateReview = async (data: ReviewForm) => {
    if (!session?.user) return;
    setSubmitting(true);

    try {
      const { error } = await supabase.from("reviews").insert([
        {
          ...data,
          user_id: session.user.id,
        },
      ]);

      if (error) throw error;

      toast.success("Avaliação enviada com sucesso!");
      resetReviewForm();
      fetchUserReviews(session.user.id);
    } catch (err: any) {
      toast.error("Erro ao salvar avaliação: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // 5. Excluir Avaliação
  const handleDeleteReview = async (id: string) => {
    try {
      const { error } = await supabase.from("reviews").delete().eq("id", id);
      if (error) throw error;

      toast.success("Avaliação removida!");
      setReviews((prev) => prev.filter((item) => item.id !== id));
    } catch (err: any) {
      toast.error("Erro ao remover: " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <p className="text-cocoa font-medium">Carregando...</p>
      </div>
    );
  }

  // TELA DE LOGIN
  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md border border-cocoa/10">
          <button
            onClick={() => navigate({ to: "/" })}
            className="mb-6 flex items-center gap-2 text-sm text-cocoa/70 hover:text-terracotta transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para o site
          </button>

          <h1 className="text-2xl font-bold text-cocoa">Área do Cliente</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Acesse para gerenciar seus depoimentos e avaliações.
          </p>

          {/* TELA DE LOGIN COM LOGS E SUBMIT GARANTIDO */}
          <form
            onSubmit={handleSubmitLogin(
              (data) => {
                console.log("Formulário validado com sucesso. Enviando para o Supabase...", data);
                onLogin(data);
              },
              (errors) => {
                console.error("Erro de validação do formulário Zod:", errors);
                toast.error("Preencha e-mail e senha corretamente.");
              }
            )}
            className="mt-6 space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold uppercase text-cocoa">E-mail</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-cocoa/40" />
                <input
                  type="email"
                  {...registerLogin("email")}
                  className="w-full rounded-lg border border-cocoa/20 bg-cream/30 py-2.5 pl-10 pr-3 text-sm text-cocoa focus:border-terracotta focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              {loginErrors.email && (
                <span className="text-xs text-red-500">{loginErrors.email.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-cocoa">Senha</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-cocoa/40" />
                <input
                  type="password"
                  {...registerLogin("password")}
                  className="w-full rounded-lg border border-cocoa/20 bg-cream/30 py-2.5 pl-10 pr-3 text-sm text-cocoa focus:border-terracotta focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              {loginErrors.password && (
                <span className="text-xs text-red-500">{loginErrors.password.message}</span>
              )}
            </div>

            {/* type="submit" explícito */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="mt-2 w-full rounded-lg bg-terracotta py-3 text-sm font-semibold text-white shadow transition hover:bg-terracotta/90 disabled:opacity-50 cursor-pointer"
            >
              {isLoggingIn ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // TELA DO PAINEL (LOGADO)
  return (
    <div className="min-h-screen bg-cream py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* CABEÇALHO */}
        <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-cocoa/10">
          <div>
            <h1 className="text-2xl font-bold text-cocoa">Painel de Avaliações</h1>
            <p className="text-sm text-muted-foreground">{session.user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
          >
            <LogOut className="h-4 w-4" /> Sair
          </button>
        </div>

        {/* FORMULÁRIO DE CADASTRO DE AVALIAÇÃO */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-cocoa/10">
          <h2 className="flex items-center gap-2 text-lg font-bold text-cocoa">
            <PlusCircle className="h-5 w-5 text-terracotta" /> Cadastrar Nova Avaliação
          </h2>

          <form onSubmit={handleSubmitReview(onCreateReview)} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase text-cocoa">
                  Nome do Cliente
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-4 w-4 text-cocoa/40" />
                  <input
                    type="text"
                    {...registerReview("nome_cliente")}
                    placeholder="Ex: Maria Silva"
                    className="w-full rounded-lg border border-cocoa/20 bg-cream/30 py-2 pl-10 pr-3 text-sm focus:border-terracotta focus:outline-none"
                  />
                </div>
                {reviewErrors.nome_cliente && (
                  <span className="text-xs text-red-500">{reviewErrors.nome_cliente.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-cocoa">
                  Data de Nascimento
                </label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-cocoa/40" />
                  <input
                    type="date"
                    {...registerReview("data_nascimento")}
                    className="w-full rounded-lg border border-cocoa/20 bg-cream/30 py-2 pl-10 pr-3 text-sm focus:border-terracotta focus:outline-none"
                  />
                </div>
                {reviewErrors.data_nascimento && (
                  <span className="text-xs text-red-500">{reviewErrors.data_nascimento.message}</span>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase text-cocoa">
                  Procedimento Realizado
                </label>
                <div className="relative mt-1">
                  <Activity className="absolute left-3 top-3 h-4 w-4 text-cocoa/40" />
                  <input
                    type="text"
                    {...registerReview("procedimento")}
                    placeholder="Ex: Fisioterapia Pélvica"
                    className="w-full rounded-lg border border-cocoa/20 bg-cream/30 py-2 pl-10 pr-3 text-sm focus:border-terracotta focus:outline-none"
                  />
                </div>
                {reviewErrors.procedimento && (
                  <span className="text-xs text-red-500">{reviewErrors.procedimento.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-cocoa">
                  Título do Comentário
                </label>
                <div className="relative mt-1">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-cocoa/40" />
                  <input
                    type="text"
                    {...registerReview("titulo")}
                    placeholder="Ex: Atendimento excelente!"
                    className="w-full rounded-lg border border-cocoa/20 bg-cream/30 py-2 pl-10 pr-3 text-sm focus:border-terracotta focus:outline-none"
                  />
                </div>
                {reviewErrors.titulo && (
                  <span className="text-xs text-red-500">{reviewErrors.titulo.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-cocoa">Comentário</label>
              <textarea
                rows={3}
                {...registerReview("comentario")}
                placeholder="Escreva os detalhes da experiência do cliente..."
                className="mt-1 w-full rounded-lg border border-cocoa/20 bg-cream/30 p-3 text-sm focus:border-terracotta focus:outline-none"
              />
              {reviewErrors.comentario && (
                <span className="text-xs text-red-500">{reviewErrors.comentario.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-terracotta px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-terracotta/90 disabled:opacity-50"
            >
              {submitting ? "Publicando..." : "Publicar Comentário"}
            </button>
          </form>
        </div>

        {/* LISTAGEM DE AVALIAÇÕES CADASTRADAS */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-cocoa/10">
          <h2 className="text-lg font-bold text-cocoa">Suas Avaliações Cadastradas</h2>

          {reviews.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">Nenhuma avaliação cadastrada ainda.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="flex flex-col justify-between rounded-xl border border-cocoa/10 bg-cream/20 p-4 sm:flex-row sm:items-center"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-cocoa">{rev.titulo}</span>
                      <span className="rounded bg-terracotta/10 px-2 py-0.5 text-xs text-terracotta font-medium">
                        {rev.procedimento}
                      </span>
                    </div>
                    <p className="text-sm text-cocoa/80">"{rev.comentario}"</p>
                    <p className="text-xs text-muted-foreground">
                      Cliente: <strong>{rev.nome_cliente}</strong> | Nasc: {rev.data_nascimento}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteReview(rev.id)}
                    className="mt-3 flex items-center gap-1 self-end rounded-lg p-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 sm:mt-0 sm:self-center"
                  >
                    <Trash2 className="h-4 w-4" /> Excluir
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}