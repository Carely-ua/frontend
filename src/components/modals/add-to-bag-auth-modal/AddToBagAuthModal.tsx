// import { useModalContext } from '@/utils/client';
import { AuthModalTemplate } from '../auth-modal-template';

export const AddToBagAuthModal = () => {
  // const t = useTranslations('AddToBagAuthModal');
  // const { openModal } = useModalContext();

  const successSignInHandler = () => {
    // openModal('SuccessAddedToCartModal');
  };

  return (
    <AuthModalTemplate
      title="Послуга успішно додана в кошик"
      description="Для деяких послуг потрібен попередній запис просимо вас ввести номер телефона"
      successSignInHandler={successSignInHandler}
    />
  );
};
