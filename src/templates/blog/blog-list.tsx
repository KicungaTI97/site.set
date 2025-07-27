import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";

function highlightText(text: string, query: string) {
  if (!query) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 text-gray-900 px-1 rounded ">$1</mark>');
}


export function BlogList() {
	const router = useRouter();
	const query = router.query.q as string;
	const pageTitle = query
		? `Resultado de busca "${query}"`
		: "Dicas e estratégias para impulsionar seu negócio";

	const posts = query
		? allPosts.filter(
				(post) =>
					post.title.toLowerCase().includes(query.toLowerCase()) ||
					post.description.toLowerCase().includes(query.toLowerCase()),
			)
		: allPosts;

	const hasPosts = posts.length > 0;
	return (
		<div className="flex flex-col py-24 flex-grow h-full">
			<header className="pb-14">
				<div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
					<div className="flex flex-col gap-4 md:px-0">
						{/*TAG*/}
						<span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
							BLOG
						</span>

						{/*TITLE*/}
						<h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
							{pageTitle}
						</h1>
					</div>
					{/* Search Component */}
					<Search />
				</div>
			</header>

			{/*Listagem de post */}
			{hasPosts && (
				<PostGridCard>
					{posts.map((post) => (
						<PostCard
							key={post._id}
							title={post.title}
							description={post.description}
              heighlightTitle={query ? highlightText(post.title, query) : undefined}
              heighlightDescription={query ? highlightText(post.description, query) : undefined}
							image={post.image}
							data={new Date(post.date).toLocaleDateString("pt-AO")}
							slug={post.slug}
							author={{
								avatar: post.author?.avatar,
								name: post.author?.name,
							}}
						/>
					))}
				</PostGridCard>
			)}
      {!hasPosts && (
        <div className="container px-8">
        <div className="flex flex-col items-center justify-center h-full rounded-md border border-dashed border-gray-300 p-8 md:p-12">
          {/* No posts found message */}
          <Inbox className="w-12 h-12 text-cyan-100 mb-4" />
          <h2 className="text-heading-md text-gray-100">
            Nenhum post encontrado
          </h2>
          <p className="text-body-sm text-gray-300">
            Tente ajustar sua busca ou volte mais tarde.
          </p>
        </div>          
        </div>
      )}
		</div>
	);
}
