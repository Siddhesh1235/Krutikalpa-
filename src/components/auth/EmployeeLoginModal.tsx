"use client";

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import Image from "next/image";
import {
  X,
  Mail,
  ExternalLink,
  AlertCircle,
  Lock,
} from "lucide-react";

interface EmployeeLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  // When the anchor is visible (desktop navbar button), the panel opens as a
  // dropdown right below it; otherwise it falls back to a centered modal.
  anchorRef?: React.RefObject<HTMLElement | null>;
}

interface AnchorPosition {
  top: number;
  right: number;
  caretRight: number;
}

// Gap between the anchor button and the dropdown panel.
const DROPDOWN_OFFSET = 12;

const COMPANY_DOMAIN = "@krutikalpa.com";

// Longest username that still fits beside the inline domain chip.
const MAX_INLINE_USERNAME_LENGTH = 20;

const ZOHO_WORKPLACE_DASHBOARD =
  "https://workplace.zoho.in/#dashboard/";

const ZOHO_BASE_URL =
  "https://accounts.zoho.in/signin" +
  "?servicename=ZohoHome" +
  "&signupurl=" +
  encodeURIComponent("https://www.zoho.com/signup.html") +
  "&serviceurl=" +
  encodeURIComponent(ZOHO_WORKPLACE_DASHBOARD);

// Must match .login-return-animation / .login-overlay-close in globals.css.
const CLOSE_ANIMATION_DURATION = 300;

export function EmployeeLoginModal({
  isOpen,
  onClose,
  anchorRef,
}: EmployeeLoginModalProps) {
  const [empUser, setEmpUser] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [anchorPos, setAnchorPos] = useState<AnchorPosition | null>(null);

  // Track the anchor button position so the panel drops down right below it.
  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    const updatePosition = () => {
      const rect = anchorRef?.current?.getBoundingClientRect();

      // Anchor hidden (mobile/tablet) -> centered modal.
      if (!rect || rect.width === 0) {
        setAnchorPos(null);
        return;
      }

      setAnchorPos({
        top: rect.bottom + DROPDOWN_OFFSET,
        right: Math.max(window.innerWidth - rect.right, 16),
        caretRight: rect.width / 2 - 6,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, anchorRef]);

  const inputRef = useRef<HTMLInputElement>(null);

  // window.setTimeout returns a number in the browser (not NodeJS.Timeout).
  const closeTimerRef = useRef<number | null>(null);

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

      if (closeTimerRef.current !== null) {
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

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }

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

  const previewEmail = normalizeEmployeeEmail(empUser);

  // Only show the full-address preview when the username is too long to be
  // fully visible inside the field.
  const showEmailPreview =
    empUser.trim().length > MAX_INLINE_USERNAME_LENGTH;

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

  const isDropdown = anchorPos !== null;

  const panelAnimation = isDropdown
    ? isClosing
      ? "login-dropdown-close"
      : "login-dropdown-open"
    : isClosing
      ? "login-return-animation"
      : "login-drop-animation";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="emp-webmail-title"
      className={`fixed inset-0 z-[60] ${
        isDropdown
          ? "bg-black/25 backdrop-blur-[2px]"
          : "flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
      } ${
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
        style={
          isDropdown
            ? { top: anchorPos.top, right: anchorPos.right }
            : undefined
        }
        className={`${panelAnimation} ${
          isDropdown
            ? "fixed w-[25rem] max-w-[calc(100vw-2rem)] origin-top-right"
            : "relative w-full max-w-md"
        } rounded-3xl bg-white/95 dark:bg-[#0E0E0E]/95 backdrop-blur-xl border border-zinc-200/80 dark:border-white/[0.1] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,107,10,0.06)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(255,107,10,0.35)] p-6 sm:p-7 text-zinc-900 dark:text-white`}
      >
        {/* Caret pointing at the Employee Login button */}
        {isDropdown && (
          <span
            aria-hidden="true"
            style={{ right: anchorPos.caretRight }}
            className="login-caret-pop absolute -top-1.5 z-10 w-3 h-3 rotate-45 rounded-tl-[3px] bg-[#FF6B0A]"
          />
        )}

        {/* Decorative background (clipped separately so the caret stays visible) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
        >
          {/* Top gradient accent */}
          <div className="login-accent-bar absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6B0A] via-amber-400 to-[#FF6B0A]" />

          {/* Floating glow blobs */}
          <div className="login-blob absolute -top-20 -right-16 w-48 h-48 rounded-full bg-[#FF6B0A]/20 dark:bg-[#FF6B0A]/25 blur-3xl" />
          <div
            style={{ animationDelay: "-4s" }}
            className="login-blob absolute -bottom-24 -left-16 w-48 h-48 rounded-full bg-amber-300/20 dark:bg-amber-500/10 blur-3xl"
          />

          {/* Dot grid */}
          <div className="absolute inset-x-0 top-0 h-40 opacity-[0.35] dark:opacity-20 [background-image:radial-gradient(rgba(255,107,10,0.35)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-zinc-400 hover:text-[#FF6B0A] hover:bg-[#FF6B0A]/10 hover:rotate-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header and Logo */}
        <div className="relative text-center mb-5">
          <div className="login-logo-pop relative w-16 h-16 mx-auto mb-4">
            {/* Pulsing halo */}
            <span
              aria-hidden="true"
              className="login-logo-halo absolute inset-0 rounded-2xl bg-[#FF6B0A]/30"
            />

            {/* Gradient ring tile (ring slowly rotates) */}
            <div className="relative w-full h-full rounded-2xl p-[2px] overflow-hidden shadow-lg shadow-[#FF6B0A]/30">
              <span
                aria-hidden="true"
                className="login-ring-spin absolute -inset-1/2 bg-[conic-gradient(from_0deg,#FF6B0A,#FBBF24,#FF6B0A,#FFE2CC,#FF6B0A)]"
              />
              <div className="relative w-full h-full rounded-[14px] bg-white flex items-center justify-center">
                <Image
                  src="/images/logo/K_LOGO.png"
                  alt="KrutiKalpa Solutions"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <span
            style={{ animationDelay: "220ms" }}
            className="login-stagger inline-flex items-center gap-1.5 mb-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            Secure Sign-In
          </span>

          <h3
            id="emp-webmail-title"
            style={{ animationDelay: "280ms" }}
            className="login-stagger text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Employee{" "}
            <span className="login-text-shimmer bg-gradient-to-r from-[#FF6B0A] via-amber-400 to-[#FF6B0A] bg-clip-text text-transparent">
              Webmail
            </span>
          </h3>

          <p
            style={{ animationDelay: "340ms" }}
            className="login-stagger mt-1.5 text-xs text-zinc-600 dark:text-zinc-400"
          >
            Sign in with your company account to access Zoho Workplace.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="login-shake relative mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-600 dark:text-red-400 leading-relaxed">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form
          onSubmit={goToKrutikalpaMail}
          className="relative space-y-4"
        >
          <div
            style={{ animationDelay: "400ms" }}
            className="login-stagger"
          >
            <label
              htmlFor="empUser"
              className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
            >
              Employee Email / Username:
            </label>

            {/* Field shell: icon, input and domain chip sit side by side so
                the chip never overlaps the typed username. */}
            <div
              onClick={() => inputRef.current?.focus()}
              className="group flex items-center gap-2.5 pl-3.5 pr-2 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/[0.12] cursor-text focus-within:border-[#FF6B0A] focus-within:ring-4 focus-within:ring-[#FF6B0A]/15 focus-within:shadow-[0_0_20px_-4px_rgba(255,107,10,0.45)] transition-all duration-200"
            >
              <Mail className="shrink-0 w-4 h-4 text-zinc-400 dark:text-zinc-500 group-focus-within:text-[#FF6B0A] transition-colors pointer-events-none" />

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
                className="flex-1 min-w-0 py-3 bg-transparent text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 [outline:none] focus:[outline:none]"
              />

              {/* Company Domain */}
              {!hasAtSymbol && (
                <span className="login-chip-in shrink-0 px-2 py-0.5 rounded-md bg-[#FF6B0A]/10 border border-[#FF6B0A]/20 text-xs font-mono font-medium text-[#FF6B0A] pointer-events-none select-none">
                  {COMPANY_DOMAIN}
                </span>
              )}
            </div>

            {/* Full email preview, so long usernames are always fully visible */}
            {showEmailPreview && (
              <p className="login-chip-in mt-2 flex items-start gap-1.5 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                <span className="shrink-0">Signing in as</span>
                <span className="min-w-0 break-all font-mono font-medium text-zinc-800 dark:text-zinc-200">
                  {previewEmail}
                </span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ animationDelay: "470ms" }}
            className="login-stagger login-shine group relative overflow-hidden w-full py-3 px-4 rounded-xl font-semibold text-white text-white-forced bg-gradient-to-r from-[#FF6B0A] via-[#FF7F2A] to-[#EA580C] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B0A]/30 hover:shadow-xl hover:shadow-[#FF6B0A]/40 focus:outline-none focus:ring-4 focus:ring-[#FF6B0A]/30"
          >
            <span>Sign In to Workplace</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>

        {/* Footer */}
        <div
          style={{ animationDelay: "540ms" }}
          className="login-stagger relative mt-5 pt-3 border-t border-zinc-200 dark:border-white/[0.08] flex items-center justify-center gap-1.5"
        >
          <Lock className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
          <p className="text-[11px] text-zinc-500 dark:text-zinc-500">
            KrutiKalpa Corporate Mailbox (Zoho Workplace)
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLoginModal;
