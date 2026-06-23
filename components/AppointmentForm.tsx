"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, Calendar, Clock, FileText, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import styles from "./AppointmentForm.module.css";

const step1Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  age: z.string().min(1, "Age is required"),
});

const step2Schema = z.object({
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  type: z.string().min(1, "Please select appointment type"),
  concern: z.string().min(10, "Please describe your concern (min 10 characters)"),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM",
];

const appointmentTypes = [
  { value: "first-visit", label: "First Visit Consultation" },
  { value: "follow-up", label: "Follow-up Visit" },
  { value: "online", label: "Online Consultation" },
  { value: "child", label: "Child Consultation" },
];

const stepVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema) });
  const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema) });

  const toStep2 = form1.handleSubmit((data) => {
    setStep1Data(data);
    setDirection(1);
    setStep(2);
  });

  const toStep3 = form2.handleSubmit(() => {
    setDirection(1);
    setStep(3);
    setTimeout(() => setSubmitted(true), 400);
  });

  const goBack = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.wrapper}>
      {/* Progress */}
      {!submitted && (
        <div className={styles.progress}>
          {[1, 2, 3].map((n) => (
            <div key={n} className={styles.progressStep}>
              <div className={`${styles.progressDot} ${step >= n ? styles.active : ""} ${step > n ? styles.done : ""}`}>
                {step > n ? <CheckCircle size={14} /> : n}
              </div>
              <span className={styles.progressLabel}>
                {n === 1 ? "Your Info" : n === 2 ? "Appointment" : "Confirm"}
              </span>
              {n < 3 && <div className={`${styles.progressLine} ${step > n ? styles.activeLine : ""}`} />}
            </div>
          ))}
        </div>
      )}

      <div className={styles.formBody}>
        <AnimatePresence mode="wait" custom={direction}>
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h3 className={styles.stepTitle}>
                <User size={20} /> Tell us about yourself
              </h3>
              <form onSubmit={toStep2} className={styles.formGrid}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input {...form1.register("name")} className={`form-input ${form1.formState.errors.name ? "error" : ""}`} placeholder="e.g. Arun Kumar" />
                  {form1.formState.errors.name && <span className="form-error">{form1.formState.errors.name.message}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Age *</label>
                  <input {...form1.register("age")} type="number" min="1" max="120" className={`form-input ${form1.formState.errors.age ? "error" : ""}`} placeholder="e.g. 35" />
                  {form1.formState.errors.age && <span className="form-error">{form1.formState.errors.age.message}</span>}
                </div>
                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                  <label className="form-label"><Mail size={14} style={{ display: "inline", marginRight: 4 }} />Email Address *</label>
                  <input {...form1.register("email")} type="email" className={`form-input ${form1.formState.errors.email ? "error" : ""}`} placeholder="you@example.com" />
                  {form1.formState.errors.email && <span className="form-error">{form1.formState.errors.email.message}</span>}
                </div>
                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                  <label className="form-label"><Phone size={14} style={{ display: "inline", marginRight: 4 }} />Phone Number *</label>
                  <input {...form1.register("phone")} type="tel" className={`form-input ${form1.formState.errors.phone ? "error" : ""}`} placeholder="+91 98765 43210" />
                  {form1.formState.errors.phone && <span className="form-error">{form1.formState.errors.phone.message}</span>}
                </div>
                <div className={styles.formActions} style={{ gridColumn: "1 / -1" }}>
                  <button type="submit" className="btn btn-primary">
                    Next Step <ChevronRight size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h3 className={styles.stepTitle}>
                <Calendar size={20} /> Schedule your appointment
              </h3>
              <form onSubmit={toStep3} className={styles.formGrid}>
                <div className="form-group">
                  <label className="form-label"><Calendar size={14} style={{ display: "inline", marginRight: 4 }} />Preferred Date *</label>
                  <input {...form2.register("date")} type="date" min={today} className={`form-input ${form2.formState.errors.date ? "error" : ""}`} />
                  {form2.formState.errors.date && <span className="form-error">{form2.formState.errors.date.message}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Appointment Type *</label>
                  <select {...form2.register("type")} className={`form-input ${form2.formState.errors.type ? "error" : ""}`}>
                    <option value="">Select type...</option>
                    {appointmentTypes.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {form2.formState.errors.type && <span className="form-error">{form2.formState.errors.type.message}</span>}
                </div>
                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                  <label className="form-label"><Clock size={14} style={{ display: "inline", marginRight: 4 }} />Preferred Time Slot *</label>
                  <div className={styles.timeGrid}>
                    {timeSlots.map((slot) => {
                      const watchedTime = form2.watch("time");
                      return (
                        <label key={slot} className={`${styles.timeSlot} ${watchedTime === slot ? styles.timeSlotActive : ""}`}>
                          <input type="radio" {...form2.register("time")} value={slot} style={{ display: "none" }} />
                          {slot}
                        </label>
                      );
                    })}
                  </div>
                  {form2.formState.errors.time && <span className="form-error">{form2.formState.errors.time.message}</span>}
                </div>
                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                  <label className="form-label"><FileText size={14} style={{ display: "inline", marginRight: 4 }} />Health Concern *</label>
                  <textarea {...form2.register("concern")} className={`form-input form-textarea ${form2.formState.errors.concern ? "error" : ""}`} placeholder="Briefly describe your main health concern or reason for visit..." rows={4} />
                  {form2.formState.errors.concern && <span className="form-error">{form2.formState.errors.concern.message}</span>}
                </div>
                <div className={styles.formActions} style={{ gridColumn: "1 / -1" }}>
                  <button type="button" className="btn btn-outline" onClick={goBack}>
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Review Booking <ChevronRight size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3 — Confirmation */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={styles.confirmation}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={styles.successIcon}
              >
                <CheckCircle size={48} />
              </motion.div>
              <h3 className={styles.successTitle}>Appointment Requested!</h3>
              <p className={styles.successText}>
                Thank you, <strong>{step1Data?.name}</strong>! We've received your booking request.
                Our team will confirm your appointment via email at <strong>{step1Data?.email}</strong> within 2 hours.
              </p>
              <div className={styles.successDetails}>
                <div className={styles.detailRow}>
                  <span>Date</span>
                  <strong>{form2.getValues("date")}</strong>
                </div>
                <div className={styles.detailRow}>
                  <span>Time</span>
                  <strong>{form2.getValues("time")}</strong>
                </div>
                <div className={styles.detailRow}>
                  <span>Type</span>
                  <strong>{appointmentTypes.find(t => t.value === form2.getValues("type"))?.label}</strong>
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => { setStep(1); setSubmitted(false); form1.reset(); form2.reset(); }}>
                Book Another Appointment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
