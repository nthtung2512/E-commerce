"use client"

import { SessionProvider } from 'next-auth/react';

// Provider component to wrap your Next.js application and manage shared data
const Provider = ({ children, session }) => {

  return (
    // Provide shared data and session to children using context
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Provider;
