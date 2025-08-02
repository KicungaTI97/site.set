import type { Metadata } from "next";
import { LandingPage } from "@/templates/landing-page";

export const metadata: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: 'index, follow',

  metadataBase: new URL('https://site-set-4j7z.vercel.app'),
  
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://site-set-4j7z.vercel.app", // URL da página, não da imagem
    siteName: "Site.Set",
    locale: "pt_AO", 
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Site.Set - Venda seus produtos como afiliado em um único lugar",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    images: ["/og-image.jpg"],
  },

};

export default function HomePage() {
  return <LandingPage />;
}