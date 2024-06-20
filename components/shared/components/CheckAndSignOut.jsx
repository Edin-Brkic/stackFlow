"use client";
import { useClerk } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const CheckAndSignOut = ({ children }) => {
  const { session, signOut } = useClerk();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      if (session) {
        await signOut();
      }
      setIsLoading(false);
    };

    checkSession();
  }, [session, signOut]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default CheckAndSignOut;
