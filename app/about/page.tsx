"use client";

import { motion } from "framer-motion";
import { Check, Heart, Shield, Award, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const timeline = [
  { year: "1986", title: "Clinic Foundations", desc: "Opened the doors of Panecea Homeo Clinic to offer classical homeopathic remedies." },
  { year: "1998", title: "Expansion of Practice", desc: "Expanded clinical operations to address growing patient needs across Northern Kerala." },
  { year: "2008", title: "Second Branch Launched", desc: "Inaugurated our second fully equipped clinical branch in Kochi (Ernakulam)." },
  { year: "2018", title: "Trivandrum Branch & Digital Consultations", desc: "Opened our third clinic branch in Trivandrum and launched secure video consultations globally." },
  { year: "Present", title: "4 Decades of Legacy", desc: "Providing top-tier classical homeopathy across 3 branches to over 50,000+ happy patients." },
];

const values = [
  { icon: Heart, title: "Compassion First", desc: "We listen with deep empathy, providing a non-judgmental space for you to share your health struggles." },
  { icon: Shield, title: "Scientific Homeopathy", desc: "Our treatment plans are built on classical principles coupled with modern clinical diagnostics." },
  { icon: Award, title: "Individualized Care", desc: "We recognize that no two individuals are alike. Your remedy will be custom tailored to your exact constitution." },
];

export default function About() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Intro Header */}
      <section className="section bg-alt" style={{ padding: "var(--space-4xl) 0" }}>
        <div className="container text-center">
          <ScrollReveal direction="up">
            <span className="section-label" style={{ justifyContent: "center" }}>About the Doctor</span>
            <h1 className="section-title" style={{ fontSize: "3rem" }}>Dr. Navaneeth K Unni, MD (Hom.)</h1>
            <p className="section-subtitle" style={{ margin: "var(--space-md) auto 0", maxWidth: "650px" }}>
              Dedicated to restoring health naturally through scientific classical homeopathy. Learn about our history, values, and clinical qualifications.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Biography */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <ScrollReveal direction="right">
              <div>
                <span className="section-label">Our Philosophy</span>
                <h2 className="section-title">Healing the Patient, Not Just the Disease</h2>
                <div className="divider" />
                <p className="text-muted" style={{ marginBottom: "var(--space-md)", fontSize: "1.05rem" }}>
                  Dr. Navaneeth K Unni has spent the last two decades refining a clinical approach that honors the complexity of the human mind and body. As the chief physician at Panecea Homeo Clinic, he carries forward a legacy of 4 decades of gentle, complete healing.
                </p>
                <p className="text-muted" style={{ marginBottom: "var(--space-lg)" }}>
                  “Homeopathy does not believe in local diseases. Every symptom — whether it's a skin rash, headache, or digestive issue — is a language of the vital force calling for harmony. By choosing a remedy that matches this overall picture, we restore complete health.”
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Check size={18} style={{ color: "var(--color-secondary)" }} />
                    <strong>Registered Class-A Medical Practitioner</strong>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Check size={18} style={{ color: "var(--color-secondary)" }} />
                    <strong>4 Decades of Family Clinical Legacy</strong>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Check size={18} style={{ color: "var(--color-secondary)" }} />
                    <strong>3 Modern Clinic Branches in Kerala</strong>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  maxHeight: "500px",
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
                  borderRadius: "var(--radius-xl)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-lg)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ fontSize: "6rem" }}>👩‍⚕️</span>
                <h3 style={{ color: "white", marginTop: "1rem", fontFamily: "var(--font-display)" }}>Dr. Navaneeth K Unni</h3>
                <p style={{ color: "var(--color-accent-light)", fontSize: "0.9rem" }}>M.D. (Hom.) Chief Physician | B.H.M.S.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Core Values</span>
            <h2 className="section-title">What Drives Our Clinic</h2>
            <p className="section-subtitle">
              We hold ourselves to the highest ethical and medical standards, putting patients at the center of every decision.
            </p>
          </div>
          <div className="grid-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={i * 0.15} direction="up" className="card" style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(82, 183, 136, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary-light)" }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "700", color: "var(--color-primary)" }}>{v.title}</h3>
                  <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.65" }}>{v.desc}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Timeline of Care</h2>
            <p className="section-subtitle">
              A look at how Panecea Homeo Clinic's homeopathic practice has grown and evolved over the years.
            </p>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", paddingLeft: "2rem" }}>
            {/* Center line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "7px",
                width: "2px",
                background: "var(--color-border)",
              }}
            />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1} direction="up" style={{ position: "relative", marginBottom: "var(--space-2xl)" }}>
                {/* Timeline Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-31px",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    border: "3px solid white",
                    boxShadow: "var(--shadow-sm)",
                  }}
                />
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: "800",
                      color: "var(--color-primary-light)",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    {item.year}
                  </span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "4px" }}>
                    {item.title}
                  </h3>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
