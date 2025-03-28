'use client';

import { motion } from 'framer-motion';
import { Link } from '@/components/ui';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Something went wrong</h2>
        <p className="text-gray-500 max-w-md">
          An unexpected error has occurred. Our team has been notified and is working to fix the
          issue.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
          <Link href="/">Go Back Home</Link>
        </div>
      </div>
    </motion.div>
  );
}
