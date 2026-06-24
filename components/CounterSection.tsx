"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./CounterSection.module.css";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 20000, suffix: "+", label: "Patients Teeated", description: "Across Kerala and beyond" },
  { value: 14, suffix: "+", label: "Years Experience", description: "Classical homeopathy practice" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", description: "Patient-reported outcomes" },
  { value: 200, suffix: "+", label: "Conditions Treated", description: "Acute and chronic cases" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className={styles.counterValue}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={styles.stat} style={{ animationDelay: `${i * 0.15}s` }}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDesc}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
