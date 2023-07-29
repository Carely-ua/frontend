import { SearchResult } from '@/components';
import { getClinics } from '@/services';

const Clinics = async () => {
  const { data } = await getClinics();

  console.log('data23', data);
  return (
    <div>
      <h1>Clinics</h1>
      <SearchResult />
    </div>
  );
};

export default Clinics;
