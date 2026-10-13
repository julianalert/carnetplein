import type { NextConfig } from "next";

// À passer à `false` le jour du lancement : l'en-tête X-Robots-Tag garde le site hors des moteurs de recherche.
const NOINDEX = true;

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return NOINDEX ? [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }] : [];
  },
};

export default nextConfig;
