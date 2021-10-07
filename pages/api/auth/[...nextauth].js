import Providers from 'next-auth/providers'
import NextAuth from 'next-auth'


export default NextAuth ({
    providers: [
      Providers.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
    ], 
});