"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Lock, User, Eye, EyeOff, Loader2, AlertCircle, ShieldAlert } from "lucide-react";

interface EmployeeLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmployeeLoginModal({ isOpen, onClose }: EmployeeLoginModalProps) {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ employeeId?: string; password?: string }>({});

  const employeeIdInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setErrorMessage(null);
      setFieldErrors({});
      // Focus on input when modal opens
      const timer = setTimeout(() => {
        employeeIdInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errors: { employeeId?: string; password?: string } = {};
    if (!employeeId.trim()) {
      errors.employeeId = "Employee ID is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) return;

    setIsLoading(true);

    // Simulate verification delay, then display the enterprise SSO/VPN notice.
    await new Promise<void>((resolve) => setTimeout(resolve, 800));

    setErrorMessage(
      "Enterprise SSO / LDAP directory requires authorized corporate network access. " +
      "Please connect via KrutiKalpa VPN or contact IT Support."
    );
    setIsLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="employee-login-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white dark:bg-[#0A0A0A] border border-zinc-200 dark:border-white/[0.1] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden transition-colors"
      >
        {/* Decorative ambient gradient */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6B0A]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-zinc-200 dark:border-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
          aria-label="Close login modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B0A] to-[#E85D04] p-[2px] shadow-lg shadow-[#FF6B0A]/30 shrink-0">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#FF6B0A]" />
            </div>
          </div>
          <div>
            <h2 id="employee-login-title" className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
              Employee Portal
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
              Authorized KrutiKalpa staff and engineer access
            </p>
          </div>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-500/30 flex items-start gap-3 text-red-800 dark:text-red-200 text-xs">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Employee ID */}
          <div>
            <label htmlFor="employee-id-input" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Employee ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                <User className="w-4 h-4" />
              </div>
              <input
                ref={employeeIdInputRef}
                id="employee-id-input"
                type="text"
                value={employeeId}
                onChange={(e) => {
                  setEmployeeId(e.target.value);
                  if (fieldErrors.employeeId) setFieldErrors((prev) => ({ ...prev, employeeId: undefined }));
                }}
                placeholder="e.g. KK-1082"
                className={`w-full bg-zinc-50 dark:bg-[#121212] border rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none transition-colors ${
                  fieldErrors.employeeId
                    ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-zinc-300 dark:border-white/[0.1] focus:border-[#FF6B0A] focus:ring-1 focus:ring-[#FF6B0A]"
                }`}
                autoComplete="username"
              />
            </div>
            {fieldErrors.employeeId && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">{fieldErrors.employeeId}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password-input" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (fieldErrors.password) setFieldErrors((prev) => ({ ...prev, password: undefined }));
                }}
                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                className={`w-full bg-zinc-50 dark:bg-[#121212] border rounded-xl pl-10 pr-11 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none transition-colors ${
                  fieldErrors.password
                    ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-zinc-300 dark:border-white/[0.1] focus:border-[#FF6B0A] focus:ring-1 focus:ring-[#FF6B0A]"
                }`}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">{fieldErrors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-orange-gradient py-2.5 text-sm font-semibold text-white rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <span>Log In to Portal</span>
              )}
            </button>
          </div>
        </form>

        {/* Security Notice Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-white/[0.08] flex items-center gap-2 text-[11px] text-zinc-600 dark:text-zinc-500">
          <ShieldAlert className="w-4 h-4 text-[#FF6B0A] shrink-0" />
          <span>Restricted system. Access logged and monitored under DPDP governance.</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLoginModal;
