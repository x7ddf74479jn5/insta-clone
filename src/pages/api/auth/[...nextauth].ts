import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  theme: {
    logo: "/images/2048px-Instagram_icon.png",
    brandColor: "#F13287",
    colorScheme: "auto",
  },
});
