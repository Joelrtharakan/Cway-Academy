import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CWAY Academy",
    short_name: "CWAY Academy",
    description: "Equipping rural pastors and Christian leaders through theological education.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF8EF",
    theme_color: "#0D1F4E",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
