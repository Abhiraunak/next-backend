import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' }
            },
            async authorize() {
                // const username = credentials.username;
                // const password = credentials.password;
                // const user = await prisma.user.findUnique({
                //     where : {
                //         email : username,
                //         password : password
                //     }
                // })
            
                return {
                    id: "user1",
                    name: "Abhishek",
                    email: "abhishek@gmail.com"
                };
            },
        })
    ]
});

export { handler as GET, handler as POST };