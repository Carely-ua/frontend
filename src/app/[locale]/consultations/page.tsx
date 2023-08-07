import { useTranslations } from 'next-intl';
import { ConsultationNavigation, PageSearch } from '@/components';

const Consultations = () => {
  const t = useTranslations('Consultation');

  return (
    <>
      <PageSearch title={t('title')} icon="Doctor" />
      <ConsultationNavigation />
    </>
  );
};

export default Consultations;
