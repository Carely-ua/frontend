import { useTranslations } from 'next-intl';
import { Breadcrumbs, ConsultationNavigation, PageSearch } from '@/components';

const Consultations = () => {
  const t = useTranslations('Consultation');

  return (
    <>
      <PageSearch title={t('title')} icon="Doctor" />
      <Breadcrumbs breadcrumbs={[{ label: 'Консультації', path: '' }]} />
      <ConsultationNavigation />
    </>
  );
};

export default Consultations;
