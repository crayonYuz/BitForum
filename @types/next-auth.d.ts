import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      role?: 'USER' | 'ADMIN'
    } & DefaultSession['user']
  }

  interface User {
    role?: 'USER' | 'ADMIN'
  }
}

declare module 'next-auth/adapters' {
  interface AdapterUser extends DefaultUser {
    role?: 'USER' | 'ADMIN'
  }
}
