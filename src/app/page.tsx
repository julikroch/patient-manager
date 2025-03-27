import { getPatients } from '@/api/patients';
import { Patients } from '@/components';

export default async function Home() {
  const patients = await getPatients();

  return <Patients initialPatients={patients} />;
}
