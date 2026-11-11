/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "img-verda.wongnai.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.kitchensanctuary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thewoksoflife.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.dahliaskitchen.hungrrr.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.acouplecooks.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
