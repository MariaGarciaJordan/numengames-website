import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  }
};

export default withNextIntl(nextConfig);
