import { ClinicMainInfo } from '@/components';
import { getClinic, getClinics } from '@/services';

const Clinic = async () => {
  const { data } = await getClinic();

  return (
    <div>
      <ClinicMainInfo
        image={''}
        name='Багатопрофільний комплекс психіатрії та наркології "РЕНЕСАНС"'
        rating={5}
        reviewAmount={433}
        address="вулиця Пирогова, 34, Вінниця, Вінницька область, 21000"
        workingHours="з 9:00-17:00"
      />
    </div>
  );
};

export default Clinic;
