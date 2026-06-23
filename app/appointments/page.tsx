"use client";

import AppointmentForm from "@/components/AppointmentForm";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Appointments() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <section className="section bg-alt" style={{ padding: "var(--space-4xl) 0" }}>
        <div className="container text-center">
          <ScrollReveal direction="up">
            <span className="section-label" style={{ justifyContent: "center" }}>Booking</span>
            <h1 className="section-title" style={{ fontSize: "3rem" }}>Book Your Consultation</h1>
            <p className="section-subtitle" style={{ margin: "var(--space-md) auto 0", maxWidth: "650px" }}>
              Take the first step towards gentle, complete healing. Fill in the simple form below, and our care coordination team will reach out to confirm your slot.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-3xl)" }}>
            <ScrollReveal direction="right">
              <AppointmentForm />
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2xl)" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "var(--space-md)" }}>
                    Appointment Guidelines
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", paddingLeft: "1.25rem", listStyleType: "disc" }} className="text-muted">
                    <li>First-time consultations last approximately 45 to 60 minutes for a complete case intake.</li>
                    <li>Please bring copies of any recent medical records, blood tests, or diagnostic scans.</li>
                    <li>Avoid eating, drinking strong coffee, or brushing your teeth 20 minutes prior to your consultation.</li>
                    <li>Online consultations are hosted securely over Zoom or Google Meet. Links will be emailed upon confirmation.</li>
                  </ul>
                </div>

                <div
                  style={{
                    background: "var(--color-bg-alt)",
                    borderRadius: "var(--radius-lg)",
                    padding: "var(--space-xl)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-md)",
                  }}
                >
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-primary)" }}>
                    Need Immediate Help?
                  </h4>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    If you have a quick question or want to reschedule an existing appointment, feel free to contact us.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)", fontSize: "0.9rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Phone size={16} style={{ color: "var(--color-primary-light)" }} />
                      <a href="tel:+919876543210" style={{ fontWeight: "600" }}>+91 98765 43210</a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Mail size={16} style={{ color: "var(--color-primary-light)" }} />
                      <a href="mailto:info@paneceahomeo.com" style={{ fontWeight: "600" }}>info@paneceahomeo.com</a>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <MapPin size={16} style={{ color: "var(--color-primary-light)", marginTop: "3px" }} />
                      <span className="text-muted">
                        <strong>Panecea Branches:</strong><br />
                        • Kozhikode (Calicut - Main)<br />
                        • Kochi (Ernakulam)<br />
                        • Trivandrum (Thiruvananthapuram)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
