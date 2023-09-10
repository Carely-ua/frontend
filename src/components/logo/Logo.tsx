import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  clickHandler?(): void;
}

export const Logo: FC<LogoProps> = ({ clickHandler }) => (
  <Link href="/" onClick={clickHandler}>
    <Image src="/images/logo.svg" alt="logo" layout="fill" objectFit="cover" />
  </Link>
);
