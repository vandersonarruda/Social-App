import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  function signIn() {
    console.log("Logado...");
    setSigned(true);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
