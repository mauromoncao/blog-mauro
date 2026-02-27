import { useState, useEffect } from "react";
import { fetchPublicPosts, fetchFaqs } from "./api";

// Wrapper compatível com a sintaxe trpc.blog.listPublic.useQuery()
// usado nas páginas Blog.tsx e BlogPost.tsx copiadas do site-institucional

function useQuery<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    fetcher()
      .then(d => { if (!cancelled) setData(d); })
      .catch(e => { if (!cancelled) setError(e); })
      .finally(() => { if (!cancelled) setIsLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { data, isLoading, error };
}

// Compatível com trpc.blog.listPublic.useQuery()
const blogListPublic = {
  useQuery: () => useQuery(fetchPublicPosts),
};

// Compatível com trpc.blog.getBySlug.useQuery({ slug })
const blogGetBySlug = {
  useQuery: ({ slug }: { slug: string }) => {
    return useQuery(async () => {
      const posts = await fetchPublicPosts();
      return posts.find((p: any) => p.slug === slug) ?? null;
    });
  },
};

// Compatível com trpc.faq.listPublic.useQuery()
const faqListPublic = {
  useQuery: () => useQuery(fetchFaqs),
};

export const trpc = {
  blog: {
    listPublic: blogListPublic,
    getBySlug: blogGetBySlug,
  },
  faq: {
    listPublic: faqListPublic,
  },
};
