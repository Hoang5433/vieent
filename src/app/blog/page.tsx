import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { posts } from "@/lib/posts";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on data analytics, product updates, and best practices from the Vieent team.",
};

export default function BlogIndex() {
  return (
    <Container className="py-16 sm:py-24">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
        Blog
      </h1>
      <p className="mt-3 text-lg text-text-secondary">
        Insights on data analytics, product updates, and best practices.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-brand-600">
              {post.title}
            </h2>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-text-muted">
              <span>{post.author}</span>
              <span aria-hidden>&middot;</span>
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
              <span aria-hidden>&middot;</span>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
