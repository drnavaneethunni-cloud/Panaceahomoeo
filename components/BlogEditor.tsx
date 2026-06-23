"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, Edit3, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import styles from "./BlogEditor.module.css";

const categories = [
  "General Health", "Mental Wellness", "Skin Health",
  "Children's Health", "Women's Health", "Digestive Health",
  "Chronic Conditions", "Homeopathy Basics",
];

export default function BlogEditor() {
  const router = useRouter();
  const [preview, setPreview] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    category: "",
    author: "Dr. Navaneeth K Unni",
    content: `## Introduction

Write your introduction here...

## Main Content

Add your main content here. You can use **bold**, *italic*, and other Markdown formatting.

## Conclusion

Wrap up your article here.`,
  });

  const slug = form.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.title || !form.excerpt || !form.category || !form.content) {
      setErrorMsg("Please fill in all fields before publishing.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/create-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slug }),
      });
      if (!res.ok) throw new Error("Failed to publish");
      setStatus("success");
      setTimeout(() => router.push(`/blog/${slug}`), 2000);
    } catch (e) {
      setErrorMsg("Failed to publish. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successState}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
          <CheckCircle2 size={64} />
        </motion.div>
        <h2>Published Successfully!</h2>
        <p>Redirecting to your new post...</p>
      </div>
    );
  }

  return (
    <div className={styles.editor}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <h2 className={styles.editorTitle}>✍️ Blog Editor</h2>
          <span className={styles.slugPreview}>{slug ? `/blog/${slug}` : "slug will appear here"}</span>
        </div>
        <div className={styles.toolbarRight}>
          <button
            className={`${styles.toolBtn} ${preview ? "" : styles.active}`}
            onClick={() => setPreview(false)}
          >
            <Edit3 size={15} /> Write
          </button>
          <button
            className={`${styles.toolBtn} ${preview ? styles.active : ""}`}
            onClick={() => setPreview(true)}
          >
            <Eye size={15} /> Preview
          </button>
          <button
            className={styles.publishBtn}
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            {status === "loading" ? <Loader2 size={16} className={styles.spin} /> : <Send size={15} />}
            Publish Post
          </button>
        </div>
      </div>

      {status === "error" && (
        <div className={styles.errorBanner}>
          <AlertCircle size={16} /> {errorMsg}
        </div>
      )}

      <div className={styles.body}>
        {/* Metadata */}
        <div className={styles.metaPane}>
          <div className="form-group">
            <label className="form-label">Post Title *</label>
            <input
              value={form.title}
              onChange={set("title")}
              className="form-input"
              placeholder="e.g. Top 5 Homeopathic Remedies for Stress Relief"
            />
          </div>
          <div className={styles.metaRow}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Category *</label>
              <select value={form.category} onChange={set("category")} className="form-input">
                <option value="">Select category...</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Author</label>
              <input value={form.author} onChange={set("author")} className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Excerpt / Summary *</label>
            <textarea
              value={form.excerpt}
              onChange={set("excerpt")}
              className="form-input form-textarea"
              rows={2}
              placeholder="A brief description shown on the blog listing page..."
            />
          </div>
        </div>

        {/* Content area */}
        <div className={styles.contentPane}>
          {!preview ? (
            <div className={styles.writePane}>
              <div className={styles.markdownHint}>
                Supports **bold**, *italic*, ## headings, - lists, `code`, and more Markdown
              </div>
              <textarea
                className={styles.contentArea}
                value={form.content}
                onChange={set("content")}
                placeholder="Start writing your article..."
                spellCheck
              />
            </div>
          ) : (
            <div className={styles.previewPane}>
              <div className={styles.previewHeader}>
                <span className={styles.previewCategory}>{form.category || "Category"}</span>
                <h1 className={styles.previewTitle}>{form.title || "Your Post Title"}</h1>
                <p className={styles.previewExcerpt}>{form.excerpt || "Your excerpt will appear here."}</p>
                <div className={styles.previewMeta}>By {form.author} · {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</div>
              </div>
              <div className={styles.previewContent}>
                {form.content.split("\n").map((line, i) => {
                  if (line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>;
                  if (line.startsWith("# ")) return <h1 key={i}>{line.slice(2)}</h1>;
                  if (line.startsWith("- ")) return <li key={i}>{line.slice(2)}</li>;
                  if (line.trim() === "") return <br key={i} />;
                  return <p key={i}>{line
                    .replace(/\*\*(.*?)\*\*/g, (_, m) => m)
                    .replace(/\*(.*?)\*/g, (_, m) => m)}</p>;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
