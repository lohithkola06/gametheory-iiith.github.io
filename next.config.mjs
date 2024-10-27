/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
        unoptimized: true,
    },
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
