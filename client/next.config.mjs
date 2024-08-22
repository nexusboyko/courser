/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/courser",
  output: "export",
  reactStrictMode: true,

  env: {
    NEXT_ENV: "production",
    // NEXT_ENV: "development",
    NEXT_API_URL_PROD: "https://165.1.75.49:8080",
    NEXT_API_URL_DEV: "http://localhost:8080",
  }
};

export default nextConfig;
