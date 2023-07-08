import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../../models/user';
// import Credentials from 'next-auth/providers/credentials';
import { connectToDB } from '../../../../utils/database';
import { compare } from 'bcryptjs';
import Users from '../../../../models/Schema';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      name: "google",
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        // console.log(credentials);
        await connectToDB().catch(error => {
          throw new Error("Connection Failed...!");
        });

        // Check user existence
        const result = await Users.findOne({ email: credentials.email });
        // console.log(result);
        if (!result) {
          throw new Error("No user found with email. Please Sign Up...!");
        }

        // Compare passwords
        const checkPassword = await compare(credentials.password, result.password);

        // Incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or password didn't match");
        }

        console.log(result);
        return result;
      }
    })
  ],

  callbacks: {
    async session({ session }) {
      // Store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        try {
          await connectToDB();
          console.log(profile);

          // Check if user already exists
          const userExists = await User.findOne({ email: profile.email });

          // If not, create a new document and save user in MongoDB
          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
            });
            return `https://intern-task-phi.vercel.app/components/dashboard`;
          } else {
            return `https://intern-task-phi.vercel.app/components/dashboard`;
          }
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false;
        }
      }

      return true; // Return false for non-Google providers
    },
  }
});

export { handler as GET, handler as POST };
