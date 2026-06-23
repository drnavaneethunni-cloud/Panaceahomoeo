"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "./TestimonialCarousel.module.css";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Software Engineer, Bangalore",
    text: "I suffered from severe anxiety and insomnia for years. After just 3 months with Dr. Navaneeth, I sleep soundly and feel genuinely calm. Homeopathy works — and so does he.",
    rating: 5,
    avatar: "A",
    color: "#2d6a4f",
  },
  {
    name: "Meera Pillai",
    role: "Teacher, Kochi",
    text: "My daughter's eczema had us trying everything. Dr. Navaneeth's treatment cleared it in 4 months without any steroids. We are so grateful for his patience and expertise.",
    rating: 5,
    avatar: "M",
    color: "#8b5cf6",
  },
  {
    name: "Rahul Menon",
    role: "Entrepreneur, Calicut",
    text: "Migraine attacks used to paralyze me. Dr. Navaneeth's constitutional treatment reduced them by 90%. I can now work, travel, and live without fear.",
    rating: 5,
    avatar: "R",
    color: "#d4a843",
  },
  {
    name: "Lakshmi Nair",
    role: "Homemaker, Thrissur",
    text: "PCOD and hormonal issues were ruling my life. Dr. Navaneeth understood me holistically — not just as a patient but as a person. 6 months in, my cycles are regular and I feel like myself again.",
    rating: 5,
    avatar: "L",
    color: "#e57373",
  },
  {
    name: "Sanjay George",
    role: "Retired Officer, Trivandrum",
    text: "Arthritis pain was affecting my quality of life. Conventional medicine gave me side effects. Dr. Navaneeth's remedies have reduced my inflammation significantly. Highly recommend!",
    rating: 5,
    avatar: "S",
    color: "#0ea5e9",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setIsAuto(false);
  };

  const goTo = (i: number) => {
    setCurrent(i);
    setIsAuto(false);
  };

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAuto, next]);

  const t = testimonials[current];

  return (
    <div className={styles.carousel}>
      <div className={styles.quoteIcon}><Quote size={40} /></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={styles.slide}
        >
          <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
          <div className={styles.author}>
            <div className={styles.avatar} style={{ background: t.color }}>
              {t.avatar}
            </div>
            <div>
              <div className={styles.authorName}>{t.name}</div>
              <div className={styles.authorRole}>{t.role}</div>
            </div>
            <div className={styles.stars}>
              {"★".repeat(t.rating)}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.navBtn} aria-label="Previous">
          <ChevronLeft size={20} />
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={() => { next(); setIsAuto(false); }} className={styles.navBtn} aria-label="Next">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
