import { getPostData, getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostData(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Panecea Homeo Clinic Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Blog Detail Header */}
      <section className="section bg-alt" style={{ padding: "var(--space-4xl) 0" }}>
        <div className="container">
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "var(--color-primary-light)",
              marginBottom: "var(--space-md)",
            }}
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
          <div style={{ maxWidth: "800px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.75rem",
                fontWeight: "700",
                background: `${post.categoryColor}20`,
                color: post.categoryColor,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "var(--space-md)",
              }}
            >
              {post.category}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: "800",
                color: "var(--color-primary)",
                lineHeight: "1.25",
                marginBottom: "var(--space-lg)",
              }}
            >
              {post.title}
            </h1>
            <div
              style={{
                display: "flex",
                gap: "var(--space-xl)",
                fontSize: "0.85rem",
                color: "var(--color-text-light)",
                flexWrap: "wrap",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <User size={14} /> By {post.author}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <Calendar size={14} /> {post.date}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", maxWidth: "800px", margin: "0 auto" }}>
            <article
              className="blog-content"
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "var(--color-text)",
              }}
            >
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "var(--color-text-light)",
                  borderLeft: "4px solid var(--color-accent)",
                  paddingLeft: "var(--space-lg)",
                  marginBottom: "var(--space-2xl)",
                  lineHeight: "1.6",
                }}
              >
                {post.excerpt}
              </div>

              {/* Direct Simple Markdown Parser to avoid external compiler complexity */}
              {post.content.split("\n\n").map((block, index) => {
                const trimmed = block.trim();
                if (!trimmed) return null;

                // Headers
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.75rem",
                        color: "var(--color-primary)",
                        marginTop: "var(--space-2xl)",
                        marginBottom: "var(--space-md)",
                      }}
                    >
                      {trimmed.slice(3)}
                    </h2>
                  );
                }

                if (trimmed.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.4rem",
                        color: "var(--color-primary)",
                        marginTop: "var(--space-xl)",
                        marginBottom: "var(--space-md)",
                      }}
                    >
                      {trimmed.slice(4)}
                    </h3>
                  );
                }

                // Bullets
                if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                  const items = trimmed.split("\n");
                  return (
                    <ul
                      key={index}
                      style={{
                        listStyleType: "disc",
                        paddingLeft: "1.5rem",
                        marginBottom: "var(--space-lg)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^-\s*/, "").replace(/^\*\s*/, "")}</li>
                      ))}
                    </ul>
                  );
                }

                // Normal Paragraph
                return (
                  <p key={index} style={{ marginBottom: "var(--space-lg)" }}>
                    {trimmed.split("\n").map((line, lineIdx) => {
                      // Basic parsing for bold/italic inside inline lines
                      let parsed = line;
                      // Replace bold markdown (**text**)
                      parsed = parsed.replace(/\*\*(.*?)\*\*/g, "$1");
                      // Replace italic markdown (*text*)
                      parsed = parsed.replace(/\*(.*?)\*/g, "$1");
                      
                      return (
                        <span key={lineIdx}>
                          {parsed}
                          {lineIdx < trimmed.split("\n").length - 1 && <br />}
                        </span>
                      );
                    })}
                  </p>
                );
              })}
            </article>

            {/* CTA section under post */}
            <div
              style={{
                marginTop: "var(--space-4xl)",
                paddingTop: "var(--space-3xl)",
                borderTop: "1px solid var(--color-border)",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "var(--space-sm)" }}>
                Want to Consult Dr. Navaneeth?
              </h4>
              <p className="text-muted" style={{ maxWidth: "500px", margin: "0 auto var(--space-xl)" }}>
                Book an individual consultation to receive customized homeopathic remedies for your unique constitution.
              </p>
              <Link href="/appointments" className="btn btn-primary">
                Book An Appointment <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
