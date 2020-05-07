import React, { useState, useEffect, useContext } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as firebase from "firebase";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import AuthContext from "../../contexts/auth";
import Header from "../../components/AuthHeader";

import {
  Container,
  FormContainer,
  FormField,
  FormInput,
  FormIcon,
  ErrorText,
  ButtonConfirm,
  ButtonConfirmLabel,
  ButtonAuthMode,
  ButtonAuthModeLabel,
  ButtonGradient,
  Link,
} from "./styles";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signIn } = useContext(AuthContext);

  // useEffect = () => {
  //   return null;
  // };

  function handleSignUp() {
    setErrorMessage("");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: name,
        });
        // .then(() => {
        //   signIn();
        // });
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
          title="Sign Up"
          subtitle="Enter your phone number below to
recive your password reset instruction"
          navigation={navigation}
        />

        <FormContainer>
          <ErrorText>{errorMessage}</ErrorText>

          <FormField>
            <FormInput
              autoCapitalize="none"
              placeholder={"Name"}
              value={name}
              onChangeText={setName}
            />
            <FormIcon>
              <Ionicons name="md-person" size={23} color="#A1AFC3" />
            </FormIcon>
          </FormField>

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

          <FormField>
            <FormInput
              autoCapitalize="none"
              placeholder={"Confirm password"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <FormIcon>
              <FontAwesome5 name="key" size={18} color="#A1AFC3" />
            </FormIcon>
          </FormField>

          <ButtonConfirm onPress={handleSignUp}>
            <ButtonGradient
              colors={["#986EFF", "#6D5CFF"]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <ButtonConfirmLabel>Sign Up</ButtonConfirmLabel>
            </ButtonGradient>
          </ButtonConfirm>

          <ButtonAuthMode
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <ButtonAuthModeLabel>
              Already have an account? <Link>Log In</Link>
            </ButtonAuthModeLabel>
          </ButtonAuthMode>
        </FormContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
