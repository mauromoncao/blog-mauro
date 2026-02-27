// URL da API do painel admin — configurada via variável de ambiente na Vercel
export const API_URL = import.meta.env.VITE_API_URL ?? "";

// ──────────────────────────────────────────────────────────────
// POSTS DEMO — exibidos quando não há API conectada
// ──────────────────────────────────────────────────────────────
const DEMO_POSTS = [
  {
    id: 1,
    slug: "planejamento-tributario-2025",
    title: "Planejamento Tributário 2025: o que mudou com a Reforma?",
    subtitle: "Entenda os impactos da Reforma Tributária para sua empresa",
    excerpt: "A Reforma Tributária promoveu mudanças estruturais no sistema fiscal brasileiro. Saiba como planejar seus negócios para 2025 com segurança jurídica e eficiência fiscal.",
    content: "<p>A Reforma Tributária promoveu mudanças estruturais no sistema fiscal brasileiro...</p>",
    coverImage: null,
    categorySlug: "tributario",
    authorName: "Dr. Mauro Monção",
    status: "published",
    isPublished: true,
    isFeatured: true,
    publishedAt: "2025-01-15T10:00:00Z",
    createdAt: "2025-01-15T10:00:00Z",
    tags: "tributário,reforma,planejamento",
    metaTitle: "Planejamento Tributário 2025",
    metaDescription: "Entenda os impactos da Reforma Tributária para sua empresa em 2025.",
  },
  {
    id: 2,
    slug: "holding-familiar-protecao-patrimonio",
    title: "Holding Familiar: como proteger seu patrimônio com segurança jurídica",
    subtitle: "Estrutura jurídica eficiente para famílias e empresários",
    excerpt: "A holding familiar é uma das ferramentas mais eficientes para proteger e organizar o patrimônio familiar. Descubra como funciona e quais são os benefícios.",
    content: "<p>A holding familiar é uma das ferramentas mais eficientes...</p>",
    coverImage: null,
    categorySlug: "sucessorio",
    authorName: "Dr. Mauro Monção",
    status: "published",
    isPublished: true,
    isFeatured: true,
    publishedAt: "2025-01-20T10:00:00Z",
    createdAt: "2025-01-20T10:00:00Z",
    tags: "holding,patrimônio,sucessório",
    metaTitle: "Holding Familiar",
    metaDescription: "Como proteger seu patrimônio com holding familiar.",
  },
  {
    id: 3,
    slug: "autuacao-fiscal-como-agir",
    title: "Autuação Fiscal: como agir nas primeiras 72 horas",
    subtitle: "Guia prático para empresários e gestores financeiros",
    excerpt: "Receber uma autuação fiscal pode ser assustador, mas agir com rapidez e estratégia faz toda a diferença. Confira o passo a passo para proteger sua empresa.",
    content: "<p>Receber uma autuação fiscal pode ser assustador...</p>",
    coverImage: null,
    categorySlug: "tributario",
    authorName: "Dr. Mauro Monção",
    status: "published",
    isPublished: true,
    isFeatured: false,
    publishedAt: "2025-02-01T10:00:00Z",
    createdAt: "2025-02-01T10:00:00Z",
    tags: "autuação,fiscal,defesa",
    metaTitle: "Autuação Fiscal",
    metaDescription: "Como agir nas primeiras 72 horas após uma autuação fiscal.",
  },
  {
    id: 4,
    slug: "previdencia-complementar-empresarial",
    title: "Previdência Complementar Empresarial: benefícios fiscais e trabalhistas",
    subtitle: "Reduza encargos e fidelize talentos com plano de previdência",
    excerpt: "Oferecer previdência complementar aos colaboradores traz vantagens fiscais significativas para as empresas e reduz encargos trabalhistas.",
    content: "<p>Oferecer previdência complementar aos colaboradores...</p>",
    coverImage: null,
    categorySlug: "previdenciario",
    authorName: "Dr. Mauro Monção",
    status: "published",
    isPublished: true,
    isFeatured: false,
    publishedAt: "2025-02-08T10:00:00Z",
    createdAt: "2025-02-08T10:00:00Z",
    tags: "previdência,benefícios,trabalhista",
    metaTitle: "Previdência Complementar Empresarial",
    metaDescription: "Benefícios fiscais e trabalhistas da previdência complementar.",
  },
  {
    id: 5,
    slug: "direito-bancario-revisao-contratos",
    title: "Revisão de Contratos Bancários: quando é possível e como fazer",
    subtitle: "Proteja-se de juros abusivos e cláusulas ilegais",
    excerpt: "Muitos contratos bancários contêm cláusulas abusivas ou juros acima do permitido por lei. Saiba quando e como solicitar a revisão contratual.",
    content: "<p>Muitos contratos bancários contêm cláusulas abusivas...</p>",
    coverImage: null,
    categorySlug: "bancario",
    authorName: "Dr. Mauro Monção",
    status: "published",
    isPublished: true,
    isFeatured: false,
    publishedAt: "2025-02-15T10:00:00Z",
    createdAt: "2025-02-15T10:00:00Z",
    tags: "bancário,contratos,juros",
    metaTitle: "Revisão de Contratos Bancários",
    metaDescription: "Quando e como fazer a revisão de contratos bancários abusivos.",
  },
  {
    id: 6,
    slug: "inventario-extrajudicial-vantagens",
    title: "Inventário Extrajudicial: vantagens, requisitos e como fazer",
    subtitle: "Processo mais rápido e econômico para regularizar bens",
    excerpt: "O inventário extrajudicial é realizado em cartório, sem necessidade de ação judicial. É mais rápido, econômico e menos desgastante para as famílias.",
    content: "<p>O inventário extrajudicial é realizado em cartório...</p>",
    coverImage: null,
    categorySlug: "sucessorio",
    authorName: "Dr. Mauro Monção",
    status: "published",
    isPublished: true,
    isFeatured: false,
    publishedAt: "2025-02-20T10:00:00Z",
    createdAt: "2025-02-20T10:00:00Z",
    tags: "inventário,herança,extrajudicial",
    metaTitle: "Inventário Extrajudicial",
    metaDescription: "Vantagens, requisitos e como fazer o inventário extrajudicial.",
  },
];

const DEMO_FAQS = [
  {
    id: 1,
    question: "Os artigos do blog substituem consulta jurídica?",
    answer: "Não. Os artigos são informativos e educativos. Cada caso é único e requer análise personalizada. Para orientação específica ao seu caso, recomendamos agendar uma consulta com nossa equipe.",
    isPublished: true,
  },
  {
    id: 2,
    question: "Com que frequência vocês publicam novos artigos?",
    answer: "Publicamos semanalmente novos artigos sobre Direito Tributário, Previdenciário, Bancário, Imobiliário e Empresarial. Assine nossa newsletter para receber as novidades primeiro.",
    isPublished: true,
  },
  {
    id: 3,
    question: "Posso compartilhar os artigos do blog?",
    answer: "Sim, com atribuição ao autor e link para o artigo original. O conteúdo é de autoria do escritório Mauro Monção Advogados Associados.",
    isPublished: true,
  },
  {
    id: 4,
    question: "Como posso sugerir um tema para novo artigo?",
    answer: "Entre em contato pelo WhatsApp ou formulário de contato. Adoramos receber sugestões de temas relevantes para o cotidiano jurídico dos nossos leitores.",
    isPublished: true,
  },
];

// ──────────────────────────────────────────────────────────────
// API FETCHERS
// ──────────────────────────────────────────────────────────────

// Buscar posts publicados — usa demo se não houver API
export async function fetchPublicPosts() {
  if (!API_URL) return DEMO_POSTS;
  try {
    const res = await fetch(`${API_URL}/api/trpc/blog.listPublic`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return DEMO_POSTS;
    const data = await res.json();
    const posts = data?.result?.data ?? [];
    const filtered = posts.filter((p: any) => p.status === "published" || p.isPublished);
    return filtered.length > 0 ? filtered : DEMO_POSTS;
  } catch {
    return DEMO_POSTS;
  }
}

// Buscar FAQs publicadas — usa demo se não houver API
export async function fetchFaqs() {
  if (!API_URL) return DEMO_FAQS;
  try {
    const res = await fetch(`${API_URL}/api/trpc/faq.listPublic`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return DEMO_FAQS;
    const data = await res.json();
    const faqs = data?.result?.data ?? [];
    const filtered = faqs.filter((f: any) => f.isPublished);
    return filtered.length > 0 ? filtered : DEMO_FAQS;
  } catch {
    return DEMO_FAQS;
  }
}

// Buscar post por slug
export async function fetchPostBySlug(slug: string) {
  try {
    const posts = await fetchPublicPosts();
    return posts.find((p: any) => p.slug === slug) ?? null;
  } catch {
    return null;
  }
}

// Buscar categorias
export async function fetchCategories() {
  return [];
}
