/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.coinranking.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
