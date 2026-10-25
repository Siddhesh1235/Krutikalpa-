"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  X,
  Mail,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

interface EmployeeLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMPANY_DOMAIN = "@krutikalpa.com";
const ZOHO_WORKPLACE_DASHBOARD = "https://workplace.zoho.in/#dashboard/";

const ZOHO_BASE_URL =
  "https://accounts.zoho.in/signin" +
  "?servicename=ZohoHome" +
  "&signupurl=" +
  encodeURIComponent("https://www.zoho.com/signup.html") +
  "&serviceurl=" +
  encodeURIComponent(ZOHO_WORKPLACE_DASHBOARD);

const CLOSE_ANIMATION_DURATION = 4000;

export function EmployeeLoginModal({
  isOpen,
  onClose,
}: EmployeeLoginModalProps) {
  const [empUser, setEmpUser] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset modal state and focus input when modal opens.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setError(null);
    setIsClosing(false);

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";

      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, [isOpen]);

  // Close modal with return-to-top animation.
  const handleClose = useCallback(() => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);

    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setIsClosing(false);
      onClose();
    }, CLOSE_ANIMATION_DURATION);
  }, [isClosing, onClose]);

  // Handle ESC key.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) {
    return null;
  }

  const normalizeEmployeeEmail = (value: string): string => {
    const user = value.trim();

    if (!user) {
      return "";
    }

    if (!user.includes("@")) {
      return `${user}${COMPANY_DOMAIN}`;
    }

    return user;
  };

  const hasAtSymbol = empUser.includes("@");

  const goToKrutikalpaMail = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError(null);

    const email = normalizeEmployeeEmail(empUser);

    if (!email) {
      setError(
        "Please enter your employee username or email address."
      );
      inputRef.current?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError(
        "Please enter a valid employee username or email address."
      );
      inputRef.current?.focus();
      return;
    }

    // Redirect to Zoho Workplace.
    // Zoho may not support pre-filling the email on its sign-in page.
    const encodedEmail = encodeURIComponent(email);

    const targetUrl =
      `${ZOHO_BASE_URL}` +
      `&LOGIN_ID=${encodedEmail}` +
      `&login_id=${encodedEmail}`;

    const newTab = window.open(targetUrl, "_blank");

    // Fallback if popup is blocked.
    if (!newTab) {
      const form = document.createElement("form");

      form.method = "GET";
      form.action = "https://accounts.zoho.in/signin";
      form.target = "_blank";

      const params: Record<string, string> = {
        servicename: "ZohoHome",
        signupurl: "https://www.zoho.com/signup.html",
        serviceurl: ZOHO_WORKPLACE_DASHBOARD,
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

    handleClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="emp-webmail-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md ${
        isClosing
          ? "login-overlay-close"
          : "login-overlay-open"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* Modal Panel */}
      <div
        className={`${
          isClosing
            ? "login-return-animation"
            : "login-drop-animation"
        } relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#0E0E0E] border border-zinc-200 dark:border-white/[0.1] shadow-2xl p-6 sm:p-7 text-zinc-900 dark:text-white`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header and Logo */}
        <div className="text-center mb-5">
          <div className="relative w-12 h-12 mx-auto mb-3  p-2 flex items-center justify-center shadow-sm">
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
            Sign in with your company account to access Zoho Workplace.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-600 dark:text-red-400 leading-relaxed">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form
          onSubmit={goToKrutikalpaMail}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="empUser"
              className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
            >
              Employee Email / Username:
            </label>

            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />

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
                placeholder="username"
                required
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                className={`w-full pl-10 ${
                  hasAtSymbol ? "pr-4" : "pr-36"
                } py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/[0.12] text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A] focus:border-transparent transition-all`}
              />

              {/* Company Domain */}
              {!hasAtSymbol && (
                <span className="absolute right-3 px-2 py-0.5 rounded-md bg-zinc-200/70 dark:bg-white/[0.08] text-xs font-mono font-medium text-[#FF6B0A] pointer-events-none select-none">
                  {COMPANY_DOMAIN}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-white bg-[#FF6B0A] hover:bg-[#EA580C] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B0A]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
          >
            <span>Sign In to Workplace</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-zinc-200 dark:border-white/[0.08] text-center">
          <p className="text-[11px] text-zinc-500 dark:text-zinc-500">
            KrutiKalpa Corporate Mailbox (Zoho Workplace)
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLoginModal;