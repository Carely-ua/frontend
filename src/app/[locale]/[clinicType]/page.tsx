import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { PageSearch, SearchResult } from '@/components';
import { getClinics, ClinicTypes } from '@/services';
import { checkClinicType, getClinicType } from '@/utils';
//TODO: fix this import
import { ClinicType } from '@/utils/graphql/__generated__/types';

interface ClinicsWrapperParams {
  params: {
    clinicType: string;
  };
}

const ClinicsWrapper = async ({ params }: ClinicsWrapperParams) => {
  checkClinicType(params.clinicType);
  const clinicType = getClinicType(params.clinicType);

  const { data } = await getClinics({ clinicType });

  return <Clinics clinicType={clinicType} clinics={data.getClinics || []} />;
};

interface ClinicsProps {
  clinicType: ClinicType;
  clinics: Array<ClinicTypes.Clinic>;
}

const Clinics: FC<ClinicsProps> = ({ clinicType, clinics }) => {
  const t = useTranslations(clinicType);

  return (
    <div>
      <PageSearch title={t('title')} icon="Clinic" />
      {clinics.length > 0 && <SearchResult items={clinics} />}
    </div>
  );
};

export default ClinicsWrapper;
