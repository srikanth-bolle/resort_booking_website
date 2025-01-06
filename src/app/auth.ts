import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import credentialProvider from 'next-auth/providers/credentials'
import UserModel from "./utils/models/User";
export const {auth,signIn,signOut,handlers:{GET,POST}} =NextAuth({
    providers:[
        credentialProvider({
            name:'credentials',
            async authorize(credentials){
                const user = await UserModel.findOne({emailId:credentials?.emailId})
                if (!user){
                    return null
                }
                if (credentials?.password !==user.password){
                    return null
                }
                return {name:user.username,emailId:user.emailId,role:user.role}
            }
        })
    ],
    secret:process.env.SECRET_KEY,
    callbacks:{
        async jwt({token,user}:any) {
            if (user){
                token.userId = user.id;
                token.username = user.username;
                token.role = user.role;
                token.emailId =user.email;
            }
            return token
        },
        async session({session,user}:any){
            if (user){
                session.userId = user.userId;
                session.username = user.username;
                session.role = user.role;
                session.emailId = user.emailId;
                return session

            }
        }
    }
})