import React, { useState, useContext } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as firebase from "firebase";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";
// import { Dimensions } from "react-native";

import AuthContext from "../../contexts/auth";
import Header from "../../components/AuthHeader";

import {
  Container,
  FormContainer,
  FormField,
  FormInput,
  FormIcon,
  ErrorText,
  ButtonForgot,
  ButtonForgotLabel,
  ButtonConfirm,
  ButtonConfirmLabel,
  ButtonPage,
  ButtonPageLabel,
  ButtonGradient,
  Link,
} from "./styles";

// const screenWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signIn } = useContext(AuthContext);

  function handleSignIn() {
    setErrorMessage("");
    Keyboard.dismiss();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        signIn();
      })
      .catch((error) => setErrorMessage(error.message));
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container>
        <Header
          title="Hello there!"
          subtitle="Sign in to continue"
          navigation={navigation}
        />

        <FormContainer>
          <ErrorText>{errorMessage}</ErrorText>

          <FormField>
            <FormInput
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder={"E-mail"}
              value={email}
              onChangeText={setEmail}
            />
            <FormIcon>
              <Ionicons name="ios-mail" size={23} color="#A1AFC3" />
            </FormIcon>
          </FormField>
          <FormField>
            <FormInput
              autoCapitalize="none"
              placeholder={"Password"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <FormIcon>
              <FontAwesome5 name="key" size={18} color="#A1AFC3" />
            </FormIcon>
          </FormField>

          <ButtonForgot onPress={() => {}}>
            <ButtonForgotLabel>Forgot Password?</ButtonForgotLabel>
          </ButtonForgot>

          <ButtonConfirm onPress={handleSignIn}>
            <ButtonGradient
              colors={["#986EFF", "#6D5CFF"]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <ButtonConfirmLabel>Sign In</ButtonConfirmLabel>
            </ButtonGradient>
          </ButtonConfirm>

          <ButtonPage
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <ButtonPageLabel>
              Don't have an account? <Link>Sign Up</Link>
            </ButtonPageLabel>
          </ButtonPage>
        </FormContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
