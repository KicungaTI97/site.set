import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { PostPage } from "@/templates/blog";

type BlogPostPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export const revalidate = 60; // Revalidate every 60 seconds
export async function generateStaticParams() {
  const posts = allPosts.map((post) => ({
    slug: post.slug,
  }));
  return posts;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = allPosts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	return <PostPage post={post} />;
}
