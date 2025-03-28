import { z } from 'zod';

export const patientFormSchema = z.object({
  avatar: z.string().min(1, 'Avatar is required'),
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  website: z.string().url('Must be a valid URL').min(1, 'Website is required'),
});

export type PatientFormData = z.infer<typeof patientFormSchema>;
