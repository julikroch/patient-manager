import type { Patient } from '@/types/patient';

import { api } from './client';

export async function getPatients(): Promise<Patient[]> {
  return await api
    .get('users', {
      cache: 'no-store',
    })
    .json<Patient[]>();
}
