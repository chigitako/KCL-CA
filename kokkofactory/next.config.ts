import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 💡 ESLintのエラーを無視してビルド
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 💡 TypeScriptの型エラーを無視してビルド
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config, { isServer }) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(process.cwd(), "src"),
      },
    };

    return config;
  },

  // ⭐ Turbopack を無効化
  experimental: {
    turbo: false,
  },

  appDir: "src/app",
};

export default nextConfig;
