import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/constans";
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!, // Update to the correct variable name
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const currentUser = users.find(
          (user) => user.email === credentials.email
        );
        if (currentUser && currentUser.password === credentials?.password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/pages/sign-in",
  },
};
