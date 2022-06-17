/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL:
      "mongodb+srv://khepa:mine8320@cluster0.mzvov.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
