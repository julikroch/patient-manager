'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { Patient } from '@/types/patient';
import { formatDate } from '@/utils/formatDate';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import { Avatar, Button, Link } from './ui/atoms';

interface PatientCardProps {
  patient: Patient;
  isExpanded: boolean;
  onExpand: () => void;
  onEdit: (patient: Patient) => void;
}

export const PatientCard = ({ patient, isExpanded, onExpand, onEdit }: PatientCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
  >
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <Avatar src={patient.avatar} alt={patient.name} size={64} className="rounded-full" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{patient.name}</h3>
          <p className="text-sm text-gray-500">Added: {formatDate(patient.createdAt)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button.Primary onClick={() => onEdit(patient)} text="Edit" size="sm" />
          <Button.Icon onClick={onExpand} aria-label={isExpanded ? 'Show less' : 'Show more'}>
            {isExpanded ? (
              <ChevronUpIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            )}
          </Button.Icon>
        </div>
      </div>

      <AnimatePresence initial>
        {isExpanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{
              height: { duration: 0.2 },
              opacity: { duration: 0.15, delay: 0.1 },
            }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3">
              <p className="text-gray-600">{patient.description}</p>
              <div className="border-t pt-2">
                <Link href={patient.website} target="_blank">
                  Visit Website
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.p initial={{ height: 'auto' }} className="mt-3 text-gray-600 line-clamp-2">
            {patient.description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);
