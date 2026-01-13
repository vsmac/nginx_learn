import Link from "next/link";
import type { Post } from "@/data/posts";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog | DevOps Portfolio",
  description: "Writing on DevOps, Cloud, Kubernetes, Terraform, CI/CD, Observability, and Security.",
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <ul className="space-y-4">
        {sorted.map((post: Post) => (
          <li
            key={post.slug}
            className="rounded-lg border p-5 bg-gradient-to-br from-emerald-500/10 via-sky-500/5 to-transparent"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{post.summary}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-500">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  {post.tags.map((t: string) => {
                    const color =
                      t === "aws"
                        ? "from-amber-400/30"
                        : t === "kubernetes" || t === "eks"
                        ? "from-sky-500/30"
                        : t === "terraform" || t === "iac"
                        ? "from-emerald-500/30"
                        : "from-fuchsia-500/30";
                    return (
                      <span
                        key={t}
                        className={`rounded border px-2 py-0.5 bg-gradient-to-r ${color} to-transparent`}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
