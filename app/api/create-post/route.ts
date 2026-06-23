import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, category, author, content, slug } = body;

    if (!title || !excerpt || !category || !content || !slug) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Format as MDX frontmatter
    const date = new Date().toISOString().split("T")[0];
    const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
category: "${category}"
author: "${author}"
date: "${date}"
readTime: "${Math.ceil(content.split(/\s+/).length / 200)} min read"
categoryColor: "${category === "Skin Health" ? "#8b5cf6" : category === "Mental Wellness" ? "#0ea5e9" : "#2d6a4f"}"
---

${content}
`;

    const dirPath = path.join(process.cwd(), "content", "posts");
    
    // Ensure content directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, `${slug}.mdx`);
    fs.writeFileSync(filePath, mdxContent, "utf-8");

    return NextResponse.json({ success: true, slug });
  } catch (error: any) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: error.message || "Failed to create post" }, { status: 500 });
  }
}
