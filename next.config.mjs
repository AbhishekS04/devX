import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "img.freepik.com",
      "api.microlink.io",
      "randomuser.me", // ✅ Added domain for Next.js Image component
    ],
  },
};

export default nextConfig;
