/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
	dest: 'public',
	customWorkerSrc: 'service-worker',
});

export default withPWA({
	// Your Next.js config
});


// export default {};