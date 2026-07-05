import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPost, posts } from "@/lib/posts";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <Container className="py-16 sm:py-24">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      <article className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
          <span>By {post.author}</span>
        </div>

        <div className="prose prose-gray prose-headings:font-semibold prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-brand-600 prose-blockquote:border-brand-600 prose-blockquote:text-text-secondary mt-12 max-w-none leading-relaxed">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-4 mt-10 text-2xl font-semibold">
                  {line.slice(3)}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="mb-3 mt-8 text-xl font-semibold">
                  {line.slice(4)}
                </h3>
              );
            }
            if (line.startsWith("- **")) {
              return (
                <li key={i} className="ml-6 list-disc text-text-secondary">
                  <strong className="text-text-primary">
                    {line.slice(4, line.indexOf("**", 4))}
                  </strong>
                  {line.slice(line.indexOf("**", 4) + 2)}
                </li>
              );
            }
            if (line.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="my-6 border-l-4 pl-4 italic text-text-secondary"
                >
                  {line.slice(2)}
                </blockquote>
              );
            }
            if (line.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="mb-4 leading-relaxed text-text-secondary">
                {line}
              </p>
            );
          })}
        </div>
      </article>
    </Container>
  );
}
