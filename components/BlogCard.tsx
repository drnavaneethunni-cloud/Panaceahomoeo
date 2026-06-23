import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor?: string;
}

export default function BlogCard({ slug, title, excerpt, date, readTime, category, categoryColor = "#2d6a4f" }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.thumb} style={{ background: `linear-gradient(135deg, ${categoryColor}30, ${categoryColor}10)` }}>
        <span className={styles.thumbIcon}>📝</span>
        <span className={styles.badge} style={{ background: `${categoryColor}20`, color: categoryColor }}>
          {category}
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span><Calendar size={12} /> {date}</span>
          <span><Clock size={12} /> {readTime}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <span className={styles.readMore}>
          Read Article <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
