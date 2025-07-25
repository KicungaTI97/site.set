import { ArrowRight, Clock, Store } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
	return (
		<section className="relative flex items-center justify-center mt-16">
    <div className=" container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center ">
			<div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
				<h1 className="text-gray-100 text-heading-hg font-sans">
					Venda seus produtos como afiliado em um único lugar
				</h1>
			

			<div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
				<div className="flex items-center gap-2 ">
					<Clock className="text-cyan-100 h-4 w-4" />
					<span className="text-body-md text-gray-200">
						Crie o seu site em menos de 5 minutos
					</span>
				</div>

				<div className="flex items-center gap-2 ">
					<Store className="text-cyan-100 h-4 w-4" />
					<span className="text-body-md text-gray-200">
						Acompanhe e otimize seu negócio online
					</span>
				</div>

				<div className="text-white flex-col gap-2 mt-5 items-center md:items-start lg:items-start">
					<Button className="rounded-full w-fit" asChild>
						<Link href="/criar-loja">
              Criar loga grátis
						  <ArrowRight />
            </Link>
					</Button>

					<p className="text-gray-300 text-body-xs">
						Não precisa de cartão de crédito
					</p>
				</div>
				</div>
        </div>
        <div className="relative h-[200rem] hidden md:h-full md:order-last items-center justify-center md:flex lg:flex">
					<Image
						src="/background-hero.svg"
						alt="Ilustração com icones de store, tag, e sacola"
						width={200}
						height={400}
						className="h-full w-auto object-contain"
					/>
				</div>
    </div>
		</section>
	);
};
