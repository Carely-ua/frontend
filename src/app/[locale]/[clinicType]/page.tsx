import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Search, SearchProps } from '@/components';
import { getClinics } from '@/services';
import { checkClinicType, getClinicType } from '@/utils';
//TODO: fix this import
import { ClinicType } from '@/utils/graphql/__generated__/types';

interface ClinicsProps extends Omit<SearchProps, 'title' | 'icon' | 'breadcrumbs'> {
  clinicType: ClinicType;
}

const CLINIC_TYPES = {
  clinic: 'Клініки',
  laboratory: 'Лабораторії',
};

const Clinics: FC<ClinicsProps> = ({ clinicType, clinics, hrefPrefix }) => {
  const t = useTranslations(clinicType);
  const icon = clinicType === 'clinic' ? 'Clinic' : 'Lab';

  if (clinics.length <= 0) return null;

  return (
    <Search
      breadcrumbs={[{ label: CLINIC_TYPES[clinicType], path: '/' }]}
      hrefPrefix={hrefPrefix}
      clinics={clinics}
      title={t('title')}
      icon={icon}
    />
  );
};

interface ClinicsWrapperParams {
  params: {
    clinicType: string;
  };
}

const ClinicsWrapper = async ({ params }: ClinicsWrapperParams) => {
  checkClinicType(params.clinicType);
  const clinicType = getClinicType(params.clinicType);

  const { data } = await getClinics({ clinicType });

  return (
    <Clinics
      hrefPrefix={params.clinicType}
      clinicType={clinicType}
      clinics={data.getClinics || []}
    />
  );
};

export default ClinicsWrapper;
