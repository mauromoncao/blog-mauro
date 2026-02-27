// URL da API do painel admin — configurada via variável de ambiente na Vercel
export const API_URL = import.meta.env.VITE_API_URL ?? "";

// Fetch helper para a API do painel
export async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// Buscar posts publicados
export async function fetchPublicPosts() {
  try {
    const res = await fetch(`${API_URL}/api/trpc/blog.list`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const posts = data?.result?.data ?? [];
    return posts.filter((p: any) => p.status === "published" || p.isPublished);
  } catch {
    return [];
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
  try {
    const res = await fetch(`${API_URL}/api/trpc/categories.list`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.result?.data ?? [];
  } catch {
    return [];
  }
}

// Buscar FAQs publicadas
export async function fetchFaqs() {
  try {
    const res = await fetch(`${API_URL}/api/trpc/faq.list`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const faqs = data?.result?.data ?? [];
    return faqs.filter((f: any) => f.isPublished);
  } catch {
    return [];
  }
}
