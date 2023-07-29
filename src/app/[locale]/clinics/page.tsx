import { SearchResult } from '@/components';
import { getClinics } from '@/services';

const Clinics = async () => {
  const { data } = await getClinics();

  console.log('data23', data);
  return (
    <div>
      <h1>Clinics</h1>
      {!!data.getClinics && data.getClinics.length > 0 && <SearchResult items={data.getClinics} />}
    </div>
  );
};

export default Clinics;
