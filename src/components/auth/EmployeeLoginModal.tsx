"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Mail,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface EmployeeLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZOHO_BASE_URL =
  "https://accounts.zoho.in/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html";

export function EmployeeLoginModal({
  isOpen,
  onClose,
}: EmployeeLoginModalProps) {
  const [empUser, setEmpUser] = useState("");
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input and lock body scroll when modal opens.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setError(null);

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close the modal.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const trimmed = empUser.trim();

  const previewEmail =
    trimmed.length > 0 && !trimmed.includes("@")
      ? `${trimmed}@krutikalpa.com`
      : trimmed.length > 0
        ? trimmed
        : null;

  const normalizeEmployeeEmail = (value: string): string => {
    const user = value.trim();

    if (!user) {
      return "";
    }

    // Append the company domain only when the user enters a username.
    if (!user.includes("@")) {
      return `${user}@krutikalpa.com`;
    }

    // Keep the complete email address.
    return user;
  };

  const goToKrutikalpaMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const email = normalizeEmployeeEmail(empUser);

    if (!email) {
      setError("Please enter your employee email address or username.");
      inputRef.current?.focus();
      return;
    }

    // Basic email format validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid employee email address.");
      inputRef.current?.focus();
      return;
    }

    // HTML code pramanech exact URL aani LOGIN_ID parameter tayar karne
    const encodedEmail = encodeURIComponent(email);
    const targetUrl = `${ZOHO_BASE_URL}&LOGIN_ID=${encodedEmail}&login_id=${encodedEmail}`;

    // Navin browser tab madhe Zoho sign-in page open karne
    const newTab = window.open(targetUrl, "_blank");

    if (!newTab) {
      // Jar browser ne popup block kela tar HTML GET form dware submit karne
      const form = document.createElement("form");
      form.method = "GET";
      form.action = "https://accounts.zoho.in/signin";
      form.target = "_blank";

      const params: Record<string, string> = {
        servicename: "ZohoHome",
        signupurl: "https://www.zoho.com/signup.html",
        LOGIN_ID: email,
      };

      Object.entries(params).forEach(([key, val]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = val;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    }

    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="emp-webmail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#0E0E0E] border border-zinc-200 dark:border-white/[0.1] shadow-2xl p-6 sm:p-7 text-zinc-900 dark:text-white transition-all">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header and Logo */}
        <div className="text-center mb-5">
          <div className="relative w-12 h-12 mx-auto mb-3 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] p-2 flex items-center justify-center shadow-sm">
            <Image
              src="/images/logo/K_LOGO.png"
              alt="KrutiKalpa Solutions"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>

          <h3
            id="emp-webmail-title"
            className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Employee Webmail
          </h3>

          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Sign in with your company account to access mailbox.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-600 dark:text-red-400 leading-relaxed">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={goToKrutikalpaMail} className="space-y-4">
          <div>
            <label
              htmlFor="empUser"
              className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
            >
              Employee Email / Username:
            </label>

            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                id="empUser"
                value={empUser}
                onChange={(e) => {
                  setEmpUser(e.target.value);
                  if (error) {
                    setError(null);
                  }
                }}
                placeholder="e.g. name@krutikalpa.com"
                required
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/[0.12] text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A] focus:border-transparent transition-all"
              />

              <Mail className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
            </div>

            {/* Live Email Preview */}
            {previewEmail ? (
              <p className="mt-1.5 text-xs text-[#FF6B0A] font-medium flex items-center gap-1">
                <ArrowRight className="w-3 h-3 shrink-0" />
                <span className="truncate">
                  Redirecting as: <strong>{previewEmail}</strong>
                </span>
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                युजरनेम टाकल्यास (उदा.{" "}
                <span className="font-mono text-zinc-700 dark:text-zinc-300">
                  sanket.barhate
                </span>
                ) आपोआप{" "}
                <span className="font-mono text-[#FF6B0A]">
                  @krutikalpa.com
                </span>{" "}
                जोडले जाईल.
              </p>
            )}
          </div>

          {/* Security Notice */}
          <div className="p-2.5 rounded-xl bg-[#FF6B0A]/10 border border-[#FF6B0A]/20 flex items-start gap-2 text-[11px] text-zinc-700 dark:text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-[#FF6B0A] shrink-0 mt-0.5" />
            <span>
              पासवर्ड सुरक्षितपणे अधिकृत Zoho Webmail पेजवर टाकायचा आहे.
              पासवर्ड वेबसाईटवर घेतला जात नाही.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-white bg-[#FF6B0A] hover:bg-[#EA580C] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B0A]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
          >
            <span>Sign In to Mailbox</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-zinc-200 dark:border-white/[0.08] text-center">
          <p className="text-[11px] text-zinc-500 dark:text-zinc-500">
            KrutiKalpa Corporate Mailbox (Zoho)
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLoginModal;