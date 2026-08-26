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
