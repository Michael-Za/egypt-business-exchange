import { useState } from "react";

/**
 * Authentication hook - disabled for this application
 * Returns mock values for compatibility
 */
export function useAuth() {
  const [isLoading] = useState(false);
  const [isAuthenticated] = useState(false);
  const [user] = useState(null);

  return {
    isLoading,
    isAuthenticated,
    user,
    signIn: async () => {},
    signOut: async () => {},
  };
}