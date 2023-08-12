import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
    GitHubProvider({
      clientId:process.env.GITHUB_CLIENT_ID,
      clientSecret:process.env.GITHUB_SECRET_ID
    })
  ],
  /*Objeto responsável por redirecionar para
  determinada página depois que fizer o login*/
   pages: {
     signIn: '/home',
   },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
