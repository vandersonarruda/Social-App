import React, { useState, useMemo } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";

// FIREBASE
// import * as firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyCHKmuLStJAuHhAkrajJBGxoTwxT4XTiNw",
//   authDomain: "social-app-2b3c6.firebaseapp.com",
//   databaseURL: "https://social-app-2b3c6.firebaseio.com",
//   projectId: "social-app-2b3c6",
//   storageBucket: "social-app-2b3c6.appspot.com",
//   messagingSenderId: "1040519030279",
//   appId: "1:1040519030279:web:3ac11da4d02b62fdecaca2",
// };

// firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
