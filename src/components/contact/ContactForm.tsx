"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { servicesData } from "@/data/services";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (minimum 2 characters)"),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().min(10, "Please enter a valid phone number (minimum 10 digits)"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(15, "Please describe your project (minimum 15 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-[#FF6B0A]/40 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#FF6B0A]/20 border border-[#FF6B0A] text-[#FF6B0A] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Thank You For Reaching Out!</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
          Your inquiry has been received by KrutiKalpa Solutions. One of our technical architects
          will review your requirements and respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="btn-outline-dark text-xs px-6 py-2.5 rounded-full mt-4"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel p-6 sm:p-10 rounded-3xl border border-zinc-200 dark:border-white/[0.08] space-y-5 transition-colors"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            Full Name <span className="text-[#FF6B0A]">*</span>
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="John Doe"
            className="w-full bg-zinc-50 dark:bg-[#0A0A0A] border border-zinc-300 dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#FF6B0A] transition-colors"
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            Work Email <span className="text-[#FF6B0A]">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="john@company.com"
            className="w-full bg-zinc-50 dark:bg-[#0A0A0A] border border-zinc-300 dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#FF6B0A] transition-colors"
          />
          {errors.email && (
            <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            Phone / WhatsApp <span className="text-[#FF6B0A]">*</span>
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+91 6364917021"
            className="w-full bg-zinc-50 dark:bg-[#0A0A0A] border border-zinc-300 dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#FF6B0A] transition-colors"
          />
          {errors.phone && (
            <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </p>
          )}
        </div>

        {/* Service */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            Service Required <span className="text-[#FF6B0A]">*</span>
          </label>
          <select
            {...register("service")}
            className="w-full bg-zinc-50 dark:bg-[#0A0A0A] border border-zinc-300 dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#FF6B0A] transition-colors"
          >
            <option value="">Select a Service</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Enterprise Solution">Enterprise Digital Governance</option>
            <option value="Other Consulting">Other Custom Inquiry</option>
          </select>
          {errors.service && (
            <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.service.message}
            </p>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Project Overview &amp; Goals <span className="text-[#FF6B0A]">*</span>
        </label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Please tell us about your project, current systems, timeline, and goals..."
          className="w-full bg-zinc-50 dark:bg-[#0A0A0A] border border-zinc-300 dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#FF6B0A] transition-colors"
        />
        {errors.message && (
          <p className="text-[11px] text-red-500 dark:text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-orange-gradient py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <span>Send Project Inquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center">
        Your data is kept strictly confidential. Aligned with India&apos;s DPDP Act.
      </p>
    </form>
  );
}
