"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldAlert, Award, Heart, Check, HelpCircle, Activity } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CounterSection from "@/components/CounterSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ScrollReveal from "@/components/ScrollReveal";

const servicesPreview = [
  {
    icon: Heart,
    title: "Chronic Diseases",
    description: "Holistic constitutional treatment for asthma, allergy, arthritis, hormonal imbalances, gastric complaints and autoimmune diseases.",
    color: "#2d6a4f",
  },
  {
    icon: Leaf,
    title: "Allergy & Respiratory",
    description: "Gentle remedies against asthma, seasonal allergies, sinusitis, and recurrent throat infections.",
    color: "#52b788",
  },
  {
    icon: Award,
    title: "Skin & Hair Disorders",
    description: "Treating acne, eczema, psoriasis, hair loss, and urticaria from the root cause without suppressive creams.",
    color: "#d4a843",
  },
];

const pillars = [
  {
    title: "Holistic Consultation",
    desc: "We look beyond physical symptoms to understand emotional, mental, and lifestyle stressors unique to you.",
  },
  {
    title: "Zero Side Effects",
    desc: "Remedies are prepared from natural sources in highly diluted doses, ensuring complete safety for all ages.",
  },
  {
    title: "Root Cause Cure",
    desc: "Rather than suppressing symptoms, homeopathic treatment aims to correct the internal imbalance causing them.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2 align-center" style={{ alignItems: "center" }}>
            <ScrollReveal direction="right">
              <div className="about-visual" style={{ position: "relative" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    background: "linear-gradient(135deg, var(--color-primary-light), var(--color-secondary))",
                    borderRadius: "var(--radius-xl)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <span style={{ fontSize: "5rem" }}>🌿</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    background: "var(--color-accent)",
                    color: "var(--color-primary-dark)",
                    padding: "1rem 2rem",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow-md)",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                  }}
                >
                  Established since 1996
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <span className="section-label">Meet The Doctor</span>
                <h2 className="section-title">A Gentle Approach to Complete Healing</h2>
                <div className="divider" />
                <p className="text-muted" style={{ marginBottom: "var(--space-md)", fontSize: "1.05rem" }}>
                  Welcome to Panacea Homoeo Clinic. Dr. Navaneeth K Unni,Bhms,Cncc,Mba IIMK, believes in the inherent power of the human body to heal itself. Backed by 4 decades of dedicated clinical legacy and 3 branches in Kerala, we have helped thousands of families find lasting health through classical homeopathy.
                </p>
                <p className="text-muted" style={{ marginBottom: "var(--space-lg)" }}>
                  Our treatment is highly individualized. We take the time to understand your unique physical makeup, your personality, and the lifestyle stressors that influence your well-being.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "var(--space-xl)" }}>
                  {["BHMS from Dr M G R medical university", "4 Decades of Healing Legacy across 3 Kerala Branches", "Expert in Constitutional Care & Chronic Disease Management"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: "600" }}>
                      <Check size={18} style={{ color: "var(--color-secondary)" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn btn-primary">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Treatments</span>
            <h2 className="section-title">Specialized Care Areas</h2>
            <p className="section-subtitle">
              We treat acute and chronic illnesses across all age groups, bringing the body back to its natural equilibrium.
            </p>
          </div>
          <div className="grid-3">
            {servicesPreview.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={i * 0.15}
              />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "var(--space-3xl)" }}>
            <Link href="/services" className="btn btn-outline">
              Explore All Treatments <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <CounterSection />

      {/* Healing Pillars */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">The Three Pillars of Homeopathy</h2>
            <p className="section-subtitle">
              Our clinic represents the gold standard in classical homeopathy. Here is how we make a difference.
            </p>
          </div>
          <div className="grid-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.15} direction="up" className="card" style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(82, 183, 136, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary-light)" }}>
                  <Activity size={18} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "700", color: "var(--color-primary)" }}>{p.title}</h3>
                <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">Stories of Healing</h2>
            <p className="section-subtitle">
              Read how classical homeopathic treatments have transformed the health and lives of our patients.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-dark text-white" style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle, rgba(45, 106, 79, 0.3) 0%, transparent 80%)",
            pointerEvents: "none",
          }}
        />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <span className="section-label" style={{ justifyContent: "center" }}>Start Healing Today</span>
            <h2 className="section-title section-title-white" style={{ marginTop: "var(--space-sm)" }}>Take the First Step to Holistic Recovery</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", maxWidth: "600px", margin: "var(--space-md) auto var(--space-2xl)", fontSize: "1.1rem" }}>
              Whether you are suffering from a chronic ailment, hormonal imbalance, or emotional stress, we are here to support your healing journey. Book your initial consultation today.
            </p>
            <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/appointments" className="btn btn-accent btn-lg">
                Schedule a Consultation
              </Link>
              <a href="tel:+919809054231" className="btn btn-outline-white btn-lg">
                Call +91 98090 54231
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
