"use client";

import { motion } from "framer-motion";
import { Heart, Activity, Sparkles, Smile, ShieldAlert, Award, Compass, RefreshCw } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

const allServices = [
  {
    icon: ShieldAlert,
    title: "Chronic Diseases",
    description: "Deep-acting constitutional homeopathy for long-standing diseases like thyroid issues, diabetes support, rheumatoid arthritis, and hypertension.",
    color: "#2d6a4f",
  },
  {
    icon: Sparkles,
    title: "Skin & Hair Care",
    description: "Treatment for stubborn acne, eczema, vitiligo, hair loss (alopecia), dandruff, and scalp psoriasis without any toxic ointments or side effects.",
    color: "#d4a843",
  },
  {
    icon: Smile,
    title: "Children's Health",
    description: "Safe, side-effect-free remedies for kids dealing with colic, teething pain, recurrent coughs/colds, childhood asthma, eczema, and tonsillitis.",
    color: "#8b5cf6",
  },
  {
    icon: Heart,
    title: "Women's Health",
    description: "Effective constitutional management of PCOD/PCOS, thyroid dysfunction, menstrual disorders, uterine fibroids, and menopause discomforts.",
    color: "#e57373",
  },
  {
    icon: Activity,
    title: "Anxiety & Depression",
    description: "Natural support for anxiety disorders, chronic insomnia, depression, stress-induced headaches, and emotional trauma recovery.",
    color: "#0ea5e9",
  },
  {
    icon: Compass,
    title: "Digestive Disorders",
    description: "Lasting relief from irritable bowel syndrome (IBS), chronic acidity, gastric reflux (GERD), constipation, and piles/hemorrhoids.",
    color: "#f59e0b",
  },
];

export default function Services() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Page Header */}
      <section className="section bg-alt" style={{ padding: "var(--space-4xl) 0" }}>
        <div className="container text-center">
          <ScrollReveal direction="up">
            <span className="section-label" style={{ justifyContent: "center" }}>Our Services</span>
            <h1 className="section-title" style={{ fontSize: "3rem" }}>Holistic Treatment Areas</h1>
            <p className="section-subtitle" style={{ margin: "var(--space-md) auto 0", maxWidth: "650px" }}>
              Explore the wide range of chronic and acute health conditions that can be treated gently and permanently through classical homeopathy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid of All Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-3">
            {allServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Flow/Method */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Heal You</h2>
            <p className="section-subtitle">
              Classical homeopathy follows a precise clinical process to arrive at the perfect remedy for your unique self.
            </p>
          </div>
          <div className="grid-4">
            {[
              { num: "1", title: "Detailed Intake", desc: "A comprehensive 1-hour session discussing physical symptoms, emotions, and habits." },
              { num: "2", title: "Repertorization", desc: "We study and analyze the case parameters using specialized medical repertory books." },
              { num: "3", title: "Custom Remedy Selection", desc: "A single, highly diluted custom remedy is selected matching your unique state." },
              { num: "4", title: "Follow-Up & Review", desc: "Monthly evaluation to observe the vital force recovery and adjust potencies." },
            ].map((step, i) => (
              <ScrollReveal
                key={step.num}
                delay={i * 0.1}
                direction="up"
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    background: "var(--color-primary-light)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)" }}>
                  {step.title}
                </h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
