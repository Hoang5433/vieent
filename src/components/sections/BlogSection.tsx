"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/posts";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function BlogSection() {
  const featured = posts.slice(0, 3);

  return (
    <Section id="blog" background="white">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Latest from our blog
            </h2>
            <p className="mt-2 text-lg text-text-secondary">
              Insights on data analytics, product updates, and best practices.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 sm:flex"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-brand-600">
                  {post.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-3 text-xs text-text-muted">
                  <span>{post.author}</span>
                  <span aria-hidden>&middot;</span>
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
