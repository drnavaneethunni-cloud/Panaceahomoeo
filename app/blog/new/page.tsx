import BlogEditor from "@/components/BlogEditor";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Create New Post | Panecea Homeo Clinic",
};

export default function NewPostPage() {
  return (
    <div style={{ paddingTop: "6rem", background: "var(--color-bg-alt)", minHeight: "100vh" }}>
      <div className="container" style={{ paddingBottom: "var(--space-4xl)", paddingTop: "var(--space-2xl)" }}>
        <ScrollReveal direction="up">
          <div style={{ marginBottom: "var(--space-xl)" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: "700",
                color: "var(--color-primary)",
              }}
            >
              Compose Blog Article
            </h1>
            <p className="text-muted" style={{ fontSize: "0.9rem", marginTop: "2px" }}>
              Publish new articles directly to the website by providing metadata and writing in Markdown.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.1}>
          <BlogEditor />
        </ScrollReveal>
      </div>
    </div>
  );
}
