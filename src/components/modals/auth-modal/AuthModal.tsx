'use client';

// import { useModalContext } from '@/utils/client';
import { AuthModalTemplate } from '../auth-modal-template';

export const AuthModal = () => {
  // const { openModal } = useModalContext();
  // const t = useTranslations('AddToBagAuthModal');

  const successSignInHandler = () => {
    // openModal('SuccessAuthModal');
  };

  return (
    <AuthModalTemplate
      title="Вхід/реєстрація"
      description="Lorem ipsum dolor sit amet consectetur. Tristique dictumst rhoncus enim "
      successSignInHandler={successSignInHandler}
    />
  );
};
