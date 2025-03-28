import { useState } from 'react';
import { toast } from 'sonner';
import type { PatientFormData } from '@/schemas/patient.schema';
import type { Patient } from '@/types/patient';

export function usePatients(initialPatients: Patient[]) {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [expandedPatientId, setExpandedPatientId] = useState<string | null>(null);

  const addPatient = (data: PatientFormData) => {
    const newPatient: Patient = {
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
      ...data,
    };

    setPatients(prev => [...prev, newPatient]);
    toast.success('Patient successfully added');
  };

  const editPatient = (data: PatientFormData) => {
    if (!selectedPatient) return;

    setPatients(prev =>
      prev.map(p =>
        p.id === selectedPatient.id
          ? {
              ...p,
              ...data,
            }
          : p,
      ),
    );
    toast.success('Patient successfully updated');
  };

  const handleAddEdit = (data: PatientFormData) => {
    if (selectedPatient) {
      editPatient(data);
    } else {
      addPatient(data);
    }
    setSelectedPatient(null);
    setShowForm(false);
  };

  return {
    patients,
    selectedPatient,
    showForm,
    expandedPatientId,
    setSelectedPatient,
    setShowForm,
    setExpandedPatientId,
    handleAddEdit,
  };
}
