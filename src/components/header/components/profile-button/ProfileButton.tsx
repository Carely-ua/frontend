'use client';

import { FC } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Typography } from '@/ui-kit';
import { SVG } from '@/components/svg';
import { useModalContext } from '@/utils/client';
import styles from './ProfileButton.module.scss';

interface ProfileButtonProps {
  clickHandler?(): void;
}

export const ProfileButton: FC<ProfileButtonProps> = ({ clickHandler: _clickHandler }) => {
  const { openModal } = useModalContext();
  const { data: session } = useSession();
  const router = useRouter();

  const clickHandler = () => {
    _clickHandler?.();
    if (session) {
      router.push('/account');
    } else {
      openModal('AuthModal');
    }
  };

  return (
    <div onClick={clickHandler} className={styles.wrapper}>
      <Typography component="p" color="dark-grey">
        Profile
      </Typography>
      <div className={styles.icon}>
        <SVG.User width={18} height={18} />
      </div>
    </div>
  );
};
