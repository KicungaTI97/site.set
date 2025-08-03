import type { Metadata, Viewport } from "next";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";

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
        url: "https://site-set-4j7z.vercel.app/og-image.jpg", 
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
    images: ["https://site-set-4j7z.vercel.app/og-image.jpg"],
  },

};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#000000",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="dark">
			<head>
				<meta name="darkreader-lock" content="" />
				<meta name="dark-theme" content="true" />
				<style
					dangerouslySetInnerHTML={{
						__html: `
							html { color-scheme: dark !important; }
							html[data-darkreader-mode] { 
								--darkreader-inline-bgcolor: transparent !important;
								--darkreader-inline-color: inherit !important;
							}
						`,
					}}
				/>
			</head>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
