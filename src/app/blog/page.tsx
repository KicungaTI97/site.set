import type { Metadata } from "next";
import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog - Site.Set",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: 'index, follow',

  metadataBase: new URL('https://site-set-4j7z.vercel.app'),
  
  openGraph: {
    title: "Blog - Site.Set",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://site-set-4j7z.vercel.app/blog", // URL da página, não da imagem
    siteName: "Site.Set",
    locale: "pt_AO", 
    type: "website",
    images: [
      {
        url: "https://site-set-4j7z.vercel.app/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Blog Site.Set - Venda seus produtos como afiliado em um único lugar",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Site.Set",
    description: "Dicas e estratégias para impulsionar seu negócio",
    images: ["https://site-set-4j7z.vercel.app/og-image.jpg"],
  },

};
export default function BlogListPage() {
  const sortedPost = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <BlogList posts={sortedPost} />
  );
}