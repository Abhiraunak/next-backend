import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const NEXT_AUTH ={
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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    /* Callbacks use to control what happens when an action is performed. */
    
    callbacks : {
        session: ({session, token, user} : any) =>{
            console.log(session);
            if(session && session.user){
                session.user.id = token.sub;
            }
            return session;
        }
    }

}