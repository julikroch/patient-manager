'use client';

import { motion } from 'framer-motion';
import { Link } from '@/components/ui';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-gray-500 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>
        <Link href="/">Go Back Home</Link>
      </div>
    </motion.div>
  );
}
