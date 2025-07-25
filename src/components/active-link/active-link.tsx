import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
	children: React.ReactNode;
} & LinkProps;
export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {	const router = useRouter();
	const isCurrentPath =
		router.asPath === href ||
		router.asPath === rest.as;
	return (
		<Link
			href={href}
			className={cn(
				"text-sm transition-colors hover:text-blue-200",
				isCurrentPath ? "text-blue-500" : "text-gray-100",
			)}
		>
			{children}
		</Link>
	);
};
