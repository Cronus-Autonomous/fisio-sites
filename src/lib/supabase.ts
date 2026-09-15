// @/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

// Suporte para Vite client-side e Node/Nitro server-side
const supabaseUrl =
  import.meta.env?.VITE_SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  "https://placeholder-url.supabase.co";

const supabaseAnonKey =
  import.meta.env?.VITE_SUPABASE_ANON_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Review {
  id: string;
  created_at?: string;
  user_id: string;
  titulo: string;
  comentario: string;
  nome_cliente: string;
  data_nascimento: string;
  procedimento: string;
}