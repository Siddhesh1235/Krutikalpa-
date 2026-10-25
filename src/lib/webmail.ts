/**
 * Utility functions for KrutiKalpa Employee Webmail normalization and URL construction.
 *
 * Zoho Webmail uses the custom domain https://mail.krutikalpa.com/
 * Credentials (passwords) are strictly handled on the official Zoho portal and are never
 * collected, stored, or processed on the KrutiKalpa website.
 */

export const KRUTIKALPA_DOMAIN = "krutikalpa.com";
export const KRUTIKALPA_WEBMAIL_URL = "https://mail.krutikalpa.com/";

export interface EmailNormalizationResult {
  isValid: boolean;
  normalizedEmail: string;
  errorMessage?: string;
}

/**
 * Normalizes an employee input into a canonical @krutikalpa.com email address.
 *
 * - Trims leading and trailing whitespace
 * - If input is username only (no @), appends @krutikalpa.com
 * - If input is full email with @krutikalpa.com, keeps it without duplicating domain
 * - If input belongs to an external domain (e.g. gmail.com), rejects it with a clear error
 * - Rejects empty values and malformed syntax
 */
export function normalizeEmployeeEmail(rawInput: string): EmailNormalizationResult {
  const trimmed = (rawInput || "").trim();

  if (!trimmed) {
    return {
      isValid: false,
      normalizedEmail: "",
      errorMessage: "Please enter your employee email address or username.",
    };
  }

  // Case 1: Username-only provided (e.g., "sanket.barhate", "atharv")
  if (!trimmed.includes("@")) {
    // Validate username syntax (letters, digits, dots, hyphens, underscores)
    const validUsernameRegex = /^[a-zA-Z0-9._-]+$/;
    if (!validUsernameRegex.test(trimmed)) {
      return {
        isValid: false,
        normalizedEmail: "",
        errorMessage: "Please enter a valid username (letters, numbers, dots, hyphens).",
      };
    }

    return {
      isValid: true,
      normalizedEmail: `${trimmed.toLowerCase()}@${KRUTIKALPA_DOMAIN}`,
    };
  }

  // Case 2: Full email provided (e.g. "sanket.barhate@krutikalpa.com")
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      normalizedEmail: "",
      errorMessage: "Please enter a valid email address (e.g. name@krutikalpa.com).",
    };
  }

  const emailLower = trimmed.toLowerCase();
  const domain = emailLower.split("@")[1];

  // Disallow non-krutikalpa domains (do not silently replace external domains)
  if (domain !== KRUTIKALPA_DOMAIN) {
    return {
      isValid: false,
      normalizedEmail: "",
      errorMessage: `Only @${KRUTIKALPA_DOMAIN} corporate accounts are authorized for employee webmail.`,
    };
  }

  return {
    isValid: true,
    normalizedEmail: emailLower,
  };
}

/**
 * Constructs the target destination URL for KrutiKalpa Zoho Webmail.
 *
 * Appends `login_id` as the URL parameter. Note that Zoho's custom domain
 * redirects to /biz/index.do and applies CSRF security restrictions, so while
 * `login_id` is supplied for compatibility, employee password authentication
 * is always finalized directly on the official Zoho page.
 */
export function buildWebmailDestinationUrl(email: string): string {
  try {
    const url = new URL(KRUTIKALPA_WEBMAIL_URL);
    if (email) {
      url.searchParams.set("login_id", email);
    }
    return url.toString();
  } catch {
    return `${KRUTIKALPA_WEBMAIL_URL}?login_id=${encodeURIComponent(email)}`;
  }
}
