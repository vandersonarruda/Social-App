import React, { useState, useEffect, useContext } from "react";
import { Wrapper, Title, Button, ButtonLabel } from "./styles";
import * as firebase from "firebase";

import AuthContext from "../../contexts/auth";

export default function Home() {
  const { signOut } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const { email, displayName } = firebase.auth().currentUser;
    setEmail(email);
    setName(displayName);
  });

  function handleSignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        signOut();
      });
  }

  return (
    <Wrapper>
      <Title>Hi {name}!</Title>
      <Button onPress={handleSignOut}>
        <ButtonLabel>Log Out</ButtonLabel>
      </Button>
    </Wrapper>
  );
}
