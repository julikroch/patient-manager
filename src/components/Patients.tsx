'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Toaster } from 'sonner';
import { PatientCard, PatientForm } from '@/components';
import type { Patient } from '@/types/patient';

import { Button } from './ui';

interface ClientPageProps {
  initialPatients: Patient[];
}

export function Patients({ initialPatients }: ClientPageProps) {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [expandedPatientId, setExpandedPatientId] = useState<string | null>(null);

  const handleAddEdit = (data: Partial<Patient>) => {
    if (selectedPatient) {
      // Edit existing patient
      setPatients(prev => prev.map(p => (p.id === selectedPatient.id ? { ...p, ...data } : p)));
    } else {
      // Add new patient
      const newPatient: Patient = {
        id: String(Date.now()),
        createdAt: new Date().toISOString(),
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1234.jpg',
        ...data,
      } as Patient;

      setPatients(prev => [...prev, newPatient]);
    }
    setSelectedPatient(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Patient Manager</h1>
          <Button.Primary size="lg" onClick={() => setShowForm(true)} text="Add Patient" />
        </div>

        {patients.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {patients.map(patient => (
                <PatientCard
                  key={patient.id}
                  patient={patient}
                  isExpanded={expandedPatientId === patient.id}
                  onExpand={() =>
                    setExpandedPatientId(expandedPatientId === patient.id ? null : patient.id)
                  }
                  onEdit={() => {
                    setSelectedPatient(patient);
                    setShowForm(true);
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showForm && (
          <PatientForm
            patient={selectedPatient}
            onClose={() => {
              setSelectedPatient(null);
              setShowForm(false);
            }}
            onSubmit={handleAddEdit}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
