"use client";

import React, { useState } from "react";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";

export function EmployeeWebmailBox() {
  const [empUser, setEmpUser] = useState("");

  const goToKrutikalpaMail = (e: React.FormEvent) => {
    e.preventDefault();
    let user = empUser.trim();
    if (!user) return;

    // जर कर्मचाऱ्याने फक्त नाव टाकले (उदा. sanket.barhate), तर पुढे आपोआप @krutikalpa.com जोडले जाईल
    if (!user.includes("@")) {
      user = user + "@krutikalpa.com";
    }

    // डायरेक्ट तुमच्या कस्टम डोमेनवर ईमेल आयडी घेऊन जाईल
    const loginUrl =
      "https://mail.krutikalpa.com/?login_id=" + encodeURIComponent(user);

    window.open(loginUrl, "_blank", "noopener,noreferrer");
  };

  const trimmed = empUser.trim();
  const previewEmail =
    trimmed.length > 0 && !trimmed.includes("@")
      ? `${trimmed}@krutikalpa.com`
      : null;

  return (
    <div className="w-full max-w-[340px] mx-auto my-5 p-6 rounded-xl border border-zinc-200 dark:border-white/[0.1] bg-white dark:bg-[#0E0E0E] shadow-lg shadow-black/5 dark:shadow-black/40 text-zinc-900 dark:text-white font-sans transition-all">
      <h3 className="text-center text-lg font-bold text-zinc-900 dark:text-white mb-5">
        Employee Webmail
      </h3>

      <form onSubmit={goToKrutikalpaMail} className="space-y-4">
        <div>
          <label
            htmlFor="empUser-inline"
            className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Employee Email / Username:
          </label>
          <div className="relative">
            <input
              type="text"
              id="empUser-inline"
              value={empUser}
              onChange={(e) => setEmpUser(e.target.value)}
              placeholder="e.g. name@krutikalpa.com"
              required
              className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-zinc-300 dark:border-white/[0.15] bg-zinc-50 dark:bg-white/[0.04] text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A] focus:border-transparent transition-all"
            />
            <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
          </div>

          {previewEmail && (
            <p className="mt-1.5 text-xs text-[#FF6B0A] font-medium flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              <span>{previewEmail}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-[#FF6B0A] hover:bg-[#EA580C] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
        >
          <span>Sign In to Mailbox</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

export default EmployeeWebmailBox;
