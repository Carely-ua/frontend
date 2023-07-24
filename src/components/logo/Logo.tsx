import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/">
    <Image src="/images/logo.svg" alt="me" width="147" height="60" />
  </Link>
);
