'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { Patient } from '@/types/patient';

import { Button, Form } from './ui';

interface PatientFormProps {
  patient: Patient | null;
  onSubmit: (data: Partial<Patient>) => void;
  onClose: () => void;
}

type PatientFormData = {
  name: string;
  description: string;
  website: string;
  avatar: string;
};

export function PatientForm({ patient, onSubmit, onClose }: PatientFormProps): JSX.Element {
  const form = useForm<PatientFormData>({
    defaultValues: patient || {
      name: '',
      description: '',
      website: '',
      avatar: '',
    },
    mode: 'onSubmit',
  });

  const onFormSubmit = (data: Partial<Patient>): void => {
    onSubmit(data);
    toast.success(`Patient successfully ${patient ? 'updated' : 'added'}`);
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
        <Form form={form} onSubmit={onFormSubmit} className="space-y-4">
          <Form.ImageUpload
            label="Avatar"
            register={form.register}
            name="avatar"
            error={form.formState.errors.avatar}
            registerOptions={{ required: 'Avatar is required' }}
          />

          <Form.Input
            label="Name"
            register={form.register}
            name="name"
            error={form.formState.errors.name}
            registerOptions={{ required: 'Name is required' }}
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
          />

          <div className="flex justify-end space-x-4 mt-8">
            <Button.Primary onClick={onClose} text="Cancel" size="sm" />
            <Button.Primary type="submit" text={patient ? 'Update' : 'Add'} size="sm" />
          </div>
        </Form>
      </motion.div>
    </motion.div>
  );
}
