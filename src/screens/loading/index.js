import React, { useEffect, useContext } from "react";
import { Wrapper, Title, LoadingIcon } from "../../styles/loading";

import AuthContext from "../../contexts/auth";

//import * as firebase from "firebase";

export default function Loading({ navigation }) {
  navigation.navigate("SignIn");

  // const { signed, signIn } = useContext(AuthContext);

  // signIn();
  // console.log("signed", signed);

  //useEffect(() => {
  // return firebase.auth().onAuthStateChanged((user) => {
  //   //console.log(user);
  //   // const { signIn } = useContext(AuthContext);
  //   // console.log(signIn);
  //   if (user == null) navigation.navigate("SignIn");
  // });
  //});

  return (
    <Wrapper>
      <Title>Loading...</Title>
      <LoadingIcon size="large" />
    </Wrapper>
  );
}
