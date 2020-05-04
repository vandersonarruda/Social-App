import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from "./styles";

import AuthContext from "../../contexts/auth";

import * as firebase from "firebase";

export default function Loading({ navigation }) {
  const { signed, signIn } = useContext(AuthContext);

  useEffect(() => {
    console.log("FOI AQUI");

    firebase.auth().onAuthStateChanged((user) => {
      //console.log("FIREBASE", user);
      if (user == null) {
        navigation.navigate("SignIn");
      } else {
        signIn();
      }
    });
  });

  return (
    <Container>
      <LoadingIcon size="large" />
    </Container>
  );
}
