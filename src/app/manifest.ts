export const dynamic = "force-static";

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KrutiKalpa Solutions",
    short_name: "KrutiKalpa",
    description:
      "Custom software, web applications, AI agents and chatbots by KrutiKalpa Solutions \u2014 Pune, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#FF6B0A",
    icons: [
      {
        src: "/images/logo/K_LOGO.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable" as const,
      },
    ],
  };
}
