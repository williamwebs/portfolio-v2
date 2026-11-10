import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Blog() {
  return (
    <section id="blog" className="py-14">
      <div className="max-w-4xl">
        <p className="text-xs font-mono tracking-widest text-neutral-400 mb-3">
          Writings & Thoughts
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-neutral-900 mb-4">
          Engineering insights & articles.
        </h2>
        <p className="text-xs md:text-base text-neutral-600 font-mono mb-12 max-w-xl">
          Thoughts on distributed systems, frontend engineering architecture, and high-performance web products.
        </p>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group py-8 transition-colors hover:bg-neutral-50/70 -mx-4 px-4"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-sm md:text-base font-bold font-mono tracking-tight text-neutral-900 group-hover:text-black flex items-center justify-between gap-4">
                  <span>{post.title}</span>
                  {/* Animated arrow on hover */}
                  <svg
                    className="w-4 h-4 shrink-0 transition-transform duration-300 ease-out transform -rotate-45 group-hover:rotate-0 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </h3>
              </div>

              <p className="text-sm text-neutral-600 font-mono leading-relaxed mb-4 max-w-2xl">
                {post.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[11px] font-mono py-0 px-2 text-neutral-600 border-neutral-200 rounded-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
