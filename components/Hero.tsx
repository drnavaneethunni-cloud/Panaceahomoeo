"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, Star, Shield, Heart } from "lucide-react";
import styles from "./Hero.module.css";

const floatingBadges = [
  { icon: Star, text: "4 Decades of Legacy", delay: 0 },
  { icon: Shield, text: "3 Branches in Kerala", delay: 1.5 },
  { icon: Heart, text: "20,000+ Patients Treated", delay: 3 },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Animated background */}
      <div className={styles.bg}>
        <div
          className={styles.gradientOrb1}
          style={{
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`,
          }}
        />
        <div
          className={styles.gradientOrb2}
          style={{
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 20}px)`,
          }}
        />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.pill}>🌿 4 Decades of Legacy &amp; 3 Branches</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Heal Naturally.<br />
            <span className={styles.titleAccent}>Live Fully.</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Dr. Navaneeth K Unni brings 4 decades of clinical legacy from Panecea Homeo Clinic to help you
            overcome chronic illness, restore balance, and rediscover vitality — naturally
            and gently.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link href="/appointments" className="btn btn-accent btn-lg">
              <CalendarCheck size={20} />
              Book Appointment
            </Link>
            <Link href="/about" className="btn btn-outline-white btn-lg">
              Meet Dr. Navaneeth
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className={styles.trust}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <div className={styles.trustAvatars}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.avatar} style={{ backgroundImage: `url(https://i.pravatar.cc/40?img=${i + 10})` }} />
              ))}
            </div>
            <div className={styles.trustText}>
              <div className={styles.stars}>{"★★★★★"}</div>
              <p>Trusted by <strong>20,000+</strong> patients across 3 branches</p>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.imageWrap}>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImagePlaceholder}>
                <span className={styles.doctorInitials}>Dr. Navaneeth</span>
                <span className={styles.doctorSub}>Bhms, Cncc, Mba IIMK</span>
              </div>
            </div>

            {/* Floating badges */}
            {floatingBadges.map(({ icon: Icon, text, delay }) => (
              <motion.div
                key={text}
                className={styles.floatingBadge}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay }}
              >
                <div className={styles.floatingBadgeIcon}><Icon size={14} /></div>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
