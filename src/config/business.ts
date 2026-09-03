export const business = {
  name: "Clínica Shoyufisio",
  tagline: "Fisioterapia • Hidroterapia• Home Care e Pilates",
  city: "Londrina",
  state: "PR",
  address: {
    street: "Rua Senador Souza Naves, 2129",
    district: "Jardim Londrilar",
    city: "Londrina",
    state: "PR",
    postalCode: "86015-430",
    country: "Brasil",
  },
  /** Altere apenas aqui para trocar o número de WhatsApp do negócio. */
  whatsapp: {
    /** Formato internacional, apenas dígitos. */
    number: "5543991127287",
    display: "+55 43 9112-7287",
  },
  social: {
    instagram: "https://www.instagram.com/shoyufisio_/",
    /** Adicione novas redes aqui quando os links reais forem fornecidos. */
  },
  maps: {
    reviewsUrl: "https://maps.app.goo.gl/P2bCtkEBbwqAJENY9",
    directionsUrl: "https://maps.app.goo.gl/P2bCtkEBbwqAJENY9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.5676035749448!2d-51.16009642510464!3d-23.331442178958543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb430019722187%3A0x11db5470a5446058!2sShoyufisio%20Fisioterapia!5e0!3m2!1spt-BR!2sbr!4v1787705247936!5m2!1spt-BR!2sbr",
  },
  /** 0 = domingo ... 6 = sábado. null = fechado. */
  hours: [
    { label: "Domingo", short: "Dom", open: null, close: null },
    { label: "Segunda-feira", short: "Seg", open: "08:00", close: "18:00" },
    { label: "Terça-feira", short: "Ter", open: "08:00", close: "18:00" },
    { label: "Quarta-feira", short: "Qua", open: "08:00", close: "18:00" },
    { label: "Quinta-feira", short: "Qui", open: "08:00", close: "18:00" },
    { label: "Sexta-feira", short: "Sex", open: "08:00", close: "18:00" },
    { label: "Sábado", short: "Sáb", open: "08:00", close: "12:00" },
  ] as const,
  paymentMethods: [
    "Cartão de crédito",
    "Cartão de débito",
    "Pagamento por aproximação (NFC)",
    "American Express",
    "Diners Club",
    "Mastercard",
    "Visa",
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  header: "Olá! Estava no site e gostaria de saber mais!",
  hero: "Olá! Estava no site e gostaria de saber mais!",
  sobre: "Olá! Estava no site e gostaria de saber mais!",
  painPoints: "Olá! Estava no site e gostaria de saber mais sobre a clínica e os tratamentos.",
  final: "Olá! Estava no site e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.",
  service: (servico: string) =>
    `Olá! Estava no site e gostaria de saber mais sobre o tratamento de ${servico}.`,
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "activity" | "hand" | "flower" | "droplets" | "heart-pulse" | "bandage" | "sparkles";
};

export const services: Service[] = [
  {
    id: "Fisioterapia",
    title: "Fisioterapia",
    description:
      "A fisioterapia te ajuda a aliviar dores, recuperar a mobilidade e melhorar sua qualidade de vida. Nossos profissionais criam um plano de tratamento personalizado para cada paciente, utilizando técnicas eficazes para tratar diversas condições. Conte com a gente para recuperar sua autonomia e bem-estar.",
    icon: "activity",
  },
  {
    id: "Pilates",
    title: "Pilates",
    description:
      "O Pilates é um método de exercício físico que foca na conexão entre corpo e mente. Através de movimentos controlados e precisos, ele trabalha a força, flexibilidade e equilíbrio muscular, melhorando a postura e a consciência corporal. É ideal para todos os níveis de condicionamento físico e pode ser adaptado para diferentes necessidades.",
    icon: "hand",
  },
  {
    id: "home-care",
    title: "Home Care",
    description:
      "Imagine receber um atendimento personalizado e eficaz, sem precisar sair de casa. Com o home care, nossos fisioterapeutas levam todos os equipamentos necessários até você, oferecendo um tratamento completo e individualizado. É a praticidade e o cuidado que você precisa, onde e quando você precisar.",
    icon: "flower",
  },
  {
    id: "hidroterapia",
    title: "Hidroterapia",
    description:
      "Hidroterapia, também conhecida como fisioterapia aquática, é um tipo de tratamento terapêutico realizado em uma piscina aquecida, onde exercícios são adaptados para auxiliar na reabilitação de diversas condições físicas e lesões. A água quente proporciona um ambiente seguro e eficaz para a realização de movimentos, aliviando dores, melhorando a mobilidade e fortalecendo a musculatura, além de promover relaxamento e bem-estar.",
    icon: "droplets",
  }
  // {
  //   id: "lipedema",
  //   title: "Tratamento para Lipedema",
  //   description:
  //     "Abordagem individualizada para auxiliar no cuidado corporal e na qualidade de vida.",
  //   icon: "heart-pulse",
  // },
  // {
  //   id: "pos-operatorio",
  //   title: "Pós-operatório de Cirurgia Plástica",
  //   description:
  //     "Cuidados especializados para auxiliar na recuperação e no acompanhamento do período pós-operatório.",
  //   icon: "bandage",
  // },
  // {
  //   id: "estetica-integrativa",
  //   title: "Home Care e Pilates",
  //   description:
  //     "Tratamentos que unem cuidado corporal, bem-estar, autoestima e uma visão integrada do corpo.",
  //   icon: "sparkles",
  // },
];

export type Informacao = {
  id: string;
  titulo: string;
  descricao: string;
};

export const informacoes: Informacao[] = [
  {
    id: "atendimento-domiciliar",
    titulo: "Atendimento Domiciliar",
    descricao:
      "Pensado para idosos, pessoas com dificuldade de locomoção ou mobilidade reduzida, e para quem prefere não sair de casa para os atendimentos. A fisioterapia é realizada na casa do paciente, com a estrutura e os equipamentos necessários levados até o local.",
  },
  {
    id: "disfuncoes-vestibulares",
    titulo: "Disfunções Vestibulares",
    descricao:
      "Quem sofre com tontura, vertigem, zumbido ou desequilíbrio, incluindo casos ligados a disfunções da ATM, como o bruxismo, encontra aqui um tratamento com técnicas específicas de reabilitação, que atuam nas diferentes causas do problema, aliviam dores e devolvem mais segurança e equilíbrio no dia a dia.",
  },
  {
    id: "drenagem-linfatica",
    titulo: "Drenagem Linfática",
    descricao:
      "Recomendada para pós-operatório, gestantes e para quem sofre com retenção de líquido, inchaço e sensação de pernas pesadas. É uma massagem manual suave que estimula o sistema linfático, ajudando o corpo a eliminar o excesso de líquidos.",
  },
  {
    id: "fisioterapia-geriatrica",
    titulo: "Fisioterapia Geriátrica",
    descricao:
      "Voltada para idosos que sentem perda de força, insegurança ao caminhar ou dificuldade nas atividades diárias. Trabalha força, equilíbrio e mobilidade, prevenindo quedas e ajudando a manter a autonomia.",
  },
  {
    id: "fisioterapia-neurologica",
    titulo: "Fisioterapia Neurológica",
    descricao:
      "Direcionada a pessoas com sequelas de AVC, Parkinson, esclerose múltipla e outras condições neurológicas. Trabalha a recuperação de movimentos, força, coordenação e equilíbrio, buscando mais independência no dia a dia.",
  },
  {
    id: "fisioterapia-ortopedica",
    titulo: "Fisioterapia Ortopédica",
    descricao:
      "Trata lesões e dores relacionadas a ossos, músculos, articulações e tendões, como fraturas, entorses e tendinites. É indicada para quem está em recuperação pós-cirúrgica, pós-trauma ou sofre com dores na coluna.",
  },
  {
    id: "fisioterapia-pediatrica",
    titulo: "Fisioterapia Pediátrica",
    descricao:
      "Voltada para bebês e crianças com atraso no desenvolvimento motor, alterações posturais ou distúrbios neurológicos. Utiliza estímulos lúdicos, adequados a cada fase do desenvolvimento infantil.",
  },
  {
    id: "fisioterapia-pelvica",
    titulo: "Fisioterapia Pélvica",
    descricao:
      "Trabalha o fortalecimento e a reeducação da musculatura do assoalho pélvico. Atende mulheres em casos como incontinência urinária, dores pélvicas, preparo para o parto e recuperação no pós-parto, e também homens, em casos como incontinência urinária, incontinência fecal ou pós-cirurgia de próstata.",
  },
  {
    id: "fisioterapia-respiratoria-adulto",
    titulo: "Fisioterapia Respiratória Adulto",
    descricao:
      "Utiliza técnicas manuais e exercícios para desobstruir as vias aéreas e fortalecer a musculatura da respiração. É indicada para quem tem asma, bronquite, pneumonia ou outras dificuldades respiratórias, além do preparo e da recuperação de cirurgias.",
  },
  {
    id: "fisioterapia-respiratoria-infantil",
    titulo: "Fisioterapia Respiratória Infantil",
    descricao:
      "Usa técnicas suaves para desobstruir as vias aéreas e facilitar a respiração de bebês e crianças. Recomendada em casos de bronquiolite, pneumonia, asma e resfriados frequentes.",
  },
  {
    id: "hidroterapia",
    titulo: "Hidroterapia",
    descricao:
      "Realizada dentro da piscina aquecida, onde a flutuação da água reduz o impacto nas articulações e facilita os movimentos. Indicada para quem tem dor articular, sequelas neurológicas ou dificuldade de realizar exercícios fora da água, como idosos e gestantes.",
  },
  {
    id: "liberacao-miofascial",
    titulo: "Liberação Miofascial",
    descricao:
      'Técnica manual que atua sobre a fáscia, liberando pontos de tensão e aderências. Indicada para quem sente dores musculares crônicas, sensação de "corpo travado" ou pouca flexibilidade.',
  },
  {
    id: "lpf",
    titulo: "LPF (Low Pressure Fitness)",
    descricao:
      "Uma técnica de exercícios respiratórios e posturais que fortalece o assoalho pélvico e a musculatura abdominal profunda sem aumentar a pressão interna do abdômen. Indicada para quem busca melhorar a postura, fortalecer o abdômen e ganhar consciência corporal de forma segura e de baixo impacto.",
  },
  {
    id: "manobra-de-epley",
    titulo: "Manobra de Epley",
    descricao:
      "Técnica específica para tratar a Vertigem Posicional Paroxística Benigna (VPPB), uma das causas mais comuns de tontura repentina ao movimentar a cabeça. Consiste em uma sequência de movimentos da cabeça que reposiciona pequenos cristais do ouvido interno, aliviando a tontura.",
  },
  {
    id: "massagem-modeladora",
    titulo: "Massagem Modeladora",
    descricao:
      "Massagem de estímulo mais vigoroso que ativa a circulação sanguínea e linfática. Indicada para quem busca resultados estéticos aliados aos benefícios da massagem, como reduzir medidas e o aspecto da celulite.",
  },
  {
    id: "massagem-relaxante",
    titulo: "Massagem Relaxante",
    descricao:
      "Massagem de toques suaves e uniformes que reduz o estresse, alivia tensões musculares e promove relaxamento profundo. Ideal para qualquer pessoa que queira cuidar do bem-estar físico e emocional.",
  },
  {
    id: "osteopatia",
    titulo: "Osteopatia",
    descricao:
      "Técnica manual que avalia e trata o corpo de forma integrada, buscando identificar a causa da dor e não apenas o sintoma. Recomendada para dores de coluna, cabeça e desconfortos posturais recorrentes.",
  },
  {
    id: "pilates",
    titulo: "Pilates",
    descricao:
      "Método de exercícios que trabalha o fortalecimento do centro do corpo (core), a flexibilidade, o equilíbrio e a postura, com movimentos controlados e de baixo impacto. Indicado para pessoas de todas as idades que buscam mais consciência corporal, prevenção de dores e melhora da qualidade de vida.",
  },
  {
    id: "quiropraxia",
    titulo: "Quiropraxia",
    descricao:
      "Técnica manual focada em ajustes específicos na coluna vertebral e nas articulações, corrigindo desalinhamentos que causam dor. Indicada para quem sofre com dores nas costas, no pescoço e na cabeça de origem postural.",
  },
  {
    id: "reflexologia-podal",
    titulo: "Reflexologia Podal",
    descricao:
      "Massagem terapêutica que estimula pontos específicos nos pés, ligados a diferentes órgãos e sistemas do corpo. Ideal para quem busca relaxamento, alívio de tensões e sensação de bem-estar geral.",
  },
  {
    id: "rpg",
    titulo: "RPG (Reeducação Postural Global)",
    descricao:
      "Método individualizado que trabalha as cadeias musculares do corpo inteiro, buscando reequilibrar a postura como um todo, e não apenas tratar a região onde dói. Indicado para quem sofre com dores crônicas na coluna, desvios posturais e pouca flexibilidade.",
  },
  {
    id: "taping-de-suporte",
    titulo: "Taping de Suporte",
    descricao:
      "Consiste na aplicação de bandagem elástica (kinesio tape) na região abdominal, ajudando a sustentar o peso do abdômen. Indicado para gestantes que sentem o peso da barriga e dores nas costas e na lombar ao longo da gravidez.",
  },
  {
    id: "taping-pos-parto",
    titulo: "Taping Pós-parto",
    descricao:
      "Consiste na aplicação de bandagem elástica na região abdominal, auxiliando na recuperação da diástase e no conforto e na postura da nova mamãe. Indicado para mulheres no pós-parto que sentem desconforto ou querem apoio na recuperação abdominal.",
  },
];

export type Partnerships = {
  id: string;
  titulo: string;
  descricao: string;
};

export const partnerships: Partnerships[] = [
  {
    id: "atendimento-domiciliar",
    titulo: "Atendimento Domiciliar",
    descricao:
      "Pensado para idosos, pessoas com dificuldade de locomoção ou mobilidade reduzida, e para quem prefere não sair de casa para os atendimentos. A fisioterapia é realizada na casa do paciente, com a estrutura e os equipamentos necessários levados até o local.",
  },
  {
    id: "disfuncoes-vestibulares",
    titulo: "Disfunções Vestibulares",
    descricao:
      "Quem sofre com tontura, vertigem, zumbido ou desequilíbrio, incluindo casos ligados a disfunções da ATM, como o bruxismo, encontra aqui um tratamento com técnicas específicas de reabilitação, que atuam nas diferentes causas do problema, aliviam dores e devolvem mais segurança e equilíbrio no dia a dia.",
  },
];

export type GoogleReview = {
  author: string;
  rating: number;
  comment: string;
  date?: string;
  avatarUrl?: string;
};

/**
 * Avaliações reais do Google Meu Negócio.
 * Mantido vazio de propósito: nenhuma avaliação deve ser inventada.
 * Basta popular este array (ou conectar a API do Google) para exibi-las.
 */
export const googleReviews: GoogleReview[] = [];
