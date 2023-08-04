import { PageSearch, SearchResult } from '@/components';
import { getClinics } from '@/services';

const Clinics = async () => {
  const { data } = await getClinics();

  return (
    <div>
      <PageSearch title="Приватні клініки Києва" icon="clinic" />
      {!!data.getClinics && data.getClinics.length > 0 && <SearchResult items={data.getClinics} />}
    </div>
  );
};

export default Clinics;
