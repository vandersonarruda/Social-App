import React, { useState, useContext } from "react";

import { ErrorMessage } from "../../styles/utils";
import {
  Wrapper,
  Title,
  Form,
  Input,
  InputLabel,
  InputField,
  ButtonSignIn,
  ButtonSignInLabel,
  ButtonSignUp,
  ButtonSignUpLabel,
  Bold,
} from "../../styles/signin";

import AuthContext from "../../contexts/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signIn } = useContext(AuthContext);

  function handleSignIn() {
    signIn();
  }

  return (
    <Wrapper>
      <Title>{`Hello again.\n welcome back`}</Title>

      <Form>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Input>
          <InputLabel>Email:</InputLabel>
          <InputField
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={"Email"}
            value={email}
            onChangeText={setEmail}
          />
        </Input>
        <Input>
          <InputLabel>Password:</InputLabel>
          <InputField
            placeholder={"Password"}
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </Input>
        <ButtonSignIn>
          <ButtonSignInLabel>Sign in</ButtonSignInLabel>
        </ButtonSignIn>

        <ButtonSignUp
          onPress={handleSignIn}
          // onPress={() => {
          //   navigation.navigate("SignUp");
          // }}
        >
          <ButtonSignUpLabel>
            New to SocialApp? <Bold>Sign Up</Bold>
          </ButtonSignUpLabel>
        </ButtonSignUp>
      </Form>
    </Wrapper>
  );
}
