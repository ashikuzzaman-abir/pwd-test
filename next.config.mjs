/** @type {import('next').NextConfig} */
import withPWAinit from 'next-pwa';

const withPWA = withPWAinit({
	pwa: {
		dest: 'public',
	},
});

const nextConfig = withPWA({});

export default nextConfig;
