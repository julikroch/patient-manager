'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { type PatientFormData, patientFormSchema } from '@/schemas/patient.schema';
import type { Patient } from '@/types/patient';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form } from './ui';

interface PatientFormProps {
  patient: Patient | null;
  onSubmit: (data: PatientFormData) => void;
  onClose: () => void;
}

export function PatientForm({ patient, onSubmit, onClose }: PatientFormProps): JSX.Element {
  const form = useForm<PatientFormData>({
    defaultValues: patient
      ? {
          name: patient.name,
          description: patient.description || '',
          website: patient.website,
          avatar: patient.avatar,
        }
      : {
          name: '',
          description: '',
          website: '',
          avatar: '',
        },
    resolver: zodResolver(patientFormSchema),
    mode: 'onSubmit',
  });

  const onFormSubmit = (data: PatientFormData): void => {
    onSubmit(data);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          {patient ? 'Edit Patient' : 'Add New Patient'}
        </h2>
        <Form form={form} onSubmit={onFormSubmit} className="space-y-4" noValidate>
          <Form.ImageUpload
            label="Avatar"
            register={form.register}
            setValue={form.setValue}
            name="avatar"
            error={form.formState.errors.avatar}
            registerOptions={{ required: 'Avatar is required' }}
            defaultImage={patient?.avatar}
            isRequired
          />

          <Form.Input
            label="Name"
            register={form.register}
            name="name"
            error={form.formState.errors.name}
            registerOptions={{ required: 'Name is required' }}
            isRequired
          />

          <Form.TextArea
            label="Description"
            register={form.register}
            name="description"
            error={form.formState.errors.description}
            registerOptions={{ required: 'Description is required' }}
            rows={4}
          />

          <Form.Input
            label="Website"
            register={form.register}
            name="website"
            error={form.formState.errors.website}
            type="url"
            isRequired
          />

        </Form>
        <div className="flex justify-end space-x-4 mt-8">
          <Button.Primary onClick={onClose} text="Cancel" size="sm" type="button" />
          <Button.Primary onClick={form.handleSubmit(onFormSubmit)} text={patient ? 'Update' : 'Add'} size="sm" type="submit" />
        </div>
      </motion.div>
    </motion.div>
  );
}
