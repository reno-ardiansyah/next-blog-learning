import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { User } from "@/app/models/User";
import { connectToDatabase } from "@/libs/db";
import NextAuth from "next-auth/next";

/**
 * Configuration options for NextAuth.
 */
const authOptions: NextAuthOptions = {
  /**
   * Session configuration.
   * Uses JWT strategy for session management.
   */
  session: {
    strategy: 'jwt',
  },
  /**
   * Secret key for signing JWT.
   */
  secret: process.env.NEXT_SECRET || 'reno',
  /**
   * Authentication providers.
   * Configures a credentials provider for email and password authentication.
   */
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: 'Password', type: "password" },
      },
      /**
       * Authorize function to authenticate user.
       * @param {Object} credentials - User credentials.
       * @returns {Object} - Authenticated user details.
       */
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string,
          password: string
        };

        await connectToDatabase();

        const user = await User.findOne({ email });

        if (!user) {
          console.error('No user found with the email');
          throw new Error('No user found with the email');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          console.error('Invalid password');
          throw new Error('Invalid password');
        }

        console.log('User authenticated successfully');

        return {
          id: user._id,
          email: user.email,
          name: user.fullname,
          role: user.role,
        };
      }
    })
  ],
  /**
   * Callbacks for handling JWT and session.
   */
  callbacks: {
    /**
     * JWT callback.
     * Adds user ID and role to the token.
     * @param {Object} token - JWT token.
     * @param {Object} user - Authenticated user.
     * @returns {Object} - Modified token.
     */
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    /**
     * Session callback.
     * Adds user ID and role to the session.
     * @param {Object} session - Session object.
     * @param {Object} token - JWT token.
     * @returns {Object} - Modified session.
     */
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  }
};

/**
 * Handler for NextAuth.
 * Exports GET and POST handlers.
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
