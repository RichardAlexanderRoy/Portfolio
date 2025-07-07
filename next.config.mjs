/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/Portfolio' : '',
    assetPrefix: isProd ? '/Portfolio/' : '',
    trailingSlash: true,
    output: 'export',
};

export default nextConfig;
