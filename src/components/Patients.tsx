'use client';

import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import { usePatients } from '@/hooks/usePatients';
import type { Patient } from '@/types/patient';

import { PatientCard } from './PatientCard';
import { PatientForm } from './PatientForm';
import { BackToTop, Button } from './ui';

interface ClientPageProps {
  initialPatients: Patient[];
}

export const Patients = ({ initialPatients }: ClientPageProps) => {
  const {
    patients,
    selectedPatient,
    showForm,
    expandedPatientId,
    setSelectedPatient,
    setShowForm,
    setExpandedPatientId,
    handleAddEdit,
  } = usePatients(initialPatients);

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
              {patients.map((patient: Patient) => (
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

      <BackToTop />
    </div>
  );
}
