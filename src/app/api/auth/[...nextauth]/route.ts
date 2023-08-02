import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from '@/services';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        phone: { type: 'text' },
        code: { type: 'text' },
      },
      //@ts-ignore
      async authorize(credentials) {
        const { phone, code } = credentials || {};

        if (phone && code) {
          const { data } = await signIn({ phone, code });

          return {
            token: data?.signIn,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...(user || {}) };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
