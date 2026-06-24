import { getSortedPostsData } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "Health & Wellness Blog | Panacea Homoeo Clinic",
  description: "Read informative articles on classical homoeopathy remedies, natural treatments, pediatric care, and lifestyle wellness tips.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return <BlogListClient initialPosts={posts} />;
}
