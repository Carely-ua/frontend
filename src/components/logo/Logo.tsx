import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/">
    <Image src="/images/logo.svg" alt="logo" layout="fill" objectFit="cover" />
  </Link>
);
