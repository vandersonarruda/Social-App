import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  // useEffect(()=> {
  //   async function loadStorageData() {
  //     const storageUser = await AsyncStorage.getItem('@RNAuth:user');
  //     if (storageUser) {
  //       const valor = JSON.parse(storageUser)
  //     }
  //   }
  // })
  //no signOut tem que dar o AsyncStorage.clear().then(()=>{setUser(null)})

  function signIn() {
    setSigned(true);
  }

  function signOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
