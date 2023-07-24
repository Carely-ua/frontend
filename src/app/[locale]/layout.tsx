import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components';
import '@/scss/main.scss';
import { ApolloWrapper } from '@/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carely',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
