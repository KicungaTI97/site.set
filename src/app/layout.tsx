import type { Metadata, Viewport } from "next";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Site.Set",
	description: "Venda seus produtos como afiliado em um único lugar",
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
