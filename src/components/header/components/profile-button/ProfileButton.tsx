'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Typography } from '@/ui-kit';
import { useModalContext } from '../../../../utils/providers/modal-provider/ModalProvider';
import styles from './ProfileButton.module.scss';

export const ProfileButton = () => {
  const { openModal } = useModalContext();
  const { data: session } = useSession();
  const router = useRouter();

  console.log('session', session);

  const clickHandler = () => {
    if (session) {
      router.push('/account');
    } else {
      openModal('AddToBagAuthModal');
    }
  };

  return (
    <div onClick={clickHandler} className={styles.wrapper}>
      <Typography component="p" color="dark-grey">
        Profile
      </Typography>
      <div className={styles.icon}>
        <Image src="/icons/user.svg" alt="cart" width="18" height="18" />
      </div>
    </div>
  );
};
