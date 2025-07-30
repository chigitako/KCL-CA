// next.config.js
/*const path = require("path");

module.exports = {
  webpack(config, { isServer }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"), // `src` フォルダにエイリアス設定
    };

    // サーバーサイドでのみ実行する場合など、必要に応じて条件を追加
    if (!isServer) {
      // クライアントサイド専用の設定が必要な場合はこちらに追加
    }

    return config;
  },
};*/
// next.config.ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, "src"),
      },
    };

    if (!isServer) {
      // クライアント専用設定はここに書いてにょ✨
    }

    return config;
  },
};

export default nextConfig;

