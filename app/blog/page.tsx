import { getSortedPostsData } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "Health & Wellness Blog | Panecea Homeo Clinic",
  description: "Read informative articles on classical homeopathy remedies, natural treatments, pediatric care, and lifestyle wellness tips.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return <BlogListClient initialPosts={posts} />;
}
