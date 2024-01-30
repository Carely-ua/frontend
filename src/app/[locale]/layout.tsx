import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Footer, FooterSearch, Header, TopServices } from '@/components';
import '@/scss/main.scss';
import { ApolloWrapper, AppProvider } from '@/utils/client';
import GoogleAnalytics from '@/utils/analytics/GoogleAnalytics';

const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Carely - найкращі клініки та лабораторії Вінниці',
  description:
    'Carely - сучасний інструмент для вибору найкращого лікування! На нашому сайті ви можете вибрати кращу клініку, лікаря чи лабораторію у Вінниці, керуючись незалежними відгуками та рейтингами користувачів. Завдяки знижкам від нашої платформи, ви зможете отримати якісне лікування за оптимальною ціною. Обирайте надійно, обирайте з Carely!',
  icons: '/images/icon.png',
};

interface RootLayoutParams {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout = async ({ children, params: { locale } }: RootLayoutParams) => {
  let messages;
  try {
    messages = (await import(`../../../messages/ua.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang="ua">
      <body className={roboto.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <ApolloWrapper>
          <NextIntlClientProvider locale="ua" messages={messages}>
            <AppProvider>
              <Header />
              <main className="container main">{children}</main>
              <TopServices />
              <FooterSearch />
              <Footer />
            </AppProvider>
          </NextIntlClientProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
