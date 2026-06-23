"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Plus } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import { BlogPost } from "@/lib/blog";

export default function BlogListClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = Array.from(new Set(initialPosts.map((p) => p.category)));

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? post.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Header */}
      <section className="section bg-alt" style={{ padding: "var(--space-4xl) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--space-md)" }}>
            <ScrollReveal direction="up">
              <span className="section-label">Read & Learn</span>
              <h1 className="section-title" style={{ fontSize: "3rem" }}>Our Health Blog</h1>
              <p className="section-subtitle" style={{ marginTop: "var(--space-sm)" }}>
                Discover insights on classical homeopathy remedies, natural treatments, and tips for vital living.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <Link href="/blog/new" className="btn btn-primary">
                <Plus size={16} /> Write New Post
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Listing & Filters */}
      <section className="section bg-white">
        <div className="container">
          {/* Controls */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-md)",
              marginBottom: "var(--space-2xl)",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {/* Search Bar */}
            <div style={{ position: "relative", flex: 1, minWidth: "260px" }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input"
                style={{ width: "100%", paddingLeft: "3rem" }}
              />
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "1.25rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-text-muted)",
                }}
              />
            </div>

            {/* Category Filter */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <button
                onClick={() => setCategory("")}
                className={`btn btn-sm ${!category ? "btn-primary" : "btn-outline"}`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`btn btn-sm ${category === cat ? "btn-primary" : "btn-outline"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Listing */}
          {filteredPosts.length > 0 ? (
            <div className="grid-3">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                  categoryColor={post.categoryColor}
                />
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ padding: "var(--space-4xl) 0" }}>
              <span style={{ fontSize: "3rem" }}>🔍</span>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)", marginTop: "var(--space-md)" }}>No Articles Found</h3>
              <p className="text-muted" style={{ marginTop: "var(--space-xs)" }}>
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
