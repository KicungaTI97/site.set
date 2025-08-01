import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center  px-4 ">
			<div className="max-w-md w-full text-center">
				<FileQuestion size={64} className="text-gray-100 mb-6 mx-auto" />
			</div>
			<div>
				<h2 className="text-8xl font-bold text-white inline-block">404</h2>
			</div>
			<p className="text-lg text-gray-300 mt-4">
				Página não encontrada. O conteúdo que você está procurando não existe ou
				foi removido.
			</p>
			<div className="mt-6 flex justify-center gap-4">
				<Button variant="primary" asChild>
					<Link href="/">Voltar para Home</Link>
				</Button>

				<Button variant="secondary" asChild>
					<Link href="/blog?q=">
						<Search size={16} />
						Pesquisar posts
					</Link>
				</Button>
			</div>
		</div>
	);
}
