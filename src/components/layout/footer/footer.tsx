import { Logo } from "@/components/logo";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-gray-500 border-white/10 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between md:flex-row gap-8 py-8">
					<Logo />

					<nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
						<Link href="/termos-de-uso" className="hover:text-blue-200">
							Termos de uso
						</Link>
						<Link
							href="/politica-de-privacidade"
							className="hover:text-blue-200"
						>
							Política de privacidade
						</Link>
						<Link href="/feedback" className="hover:text-blue-200">
							Feedback
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
};
