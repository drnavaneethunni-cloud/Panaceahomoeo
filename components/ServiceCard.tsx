"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, color = "#2d6a4f", delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className={styles.iconWrap} style={{ background: `${color}20`, color }}>
        <Icon size={26} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.arrow} style={{ color }}>
        <span>Learn more →</span>
      </div>
      <div className={styles.hoverBar} style={{ background: color }} />
    </motion.div>
  );
}
