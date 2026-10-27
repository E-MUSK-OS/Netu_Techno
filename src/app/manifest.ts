import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Netu Techno (Netutechno) — IT & Software Development Company",
    short_name: "Netutechno",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#EFEBE1",
    theme_color: "#EFEBE1",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
