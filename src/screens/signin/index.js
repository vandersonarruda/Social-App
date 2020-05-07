import React, { useState, useContext } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";

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
  ButtonAuthMode,
  ButtonAuthModeLabel,
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

  // async function signInWithFacebook() {
  //   const appId = "249199466136905";

  //   try {
  //     await Facebook.initializeAsync(appId);
  //     const { type, token } = await Facebook.logInWithReadPermissionsAsync({
  //       permission: ["public_profile", "email"],
  //     });

  //     switch (type) {
  //       case "success": {
  //         await firebase
  //           .auth()
  //           .setPersistence(firebase.auth.Auth.Persistence.LOCAL); // Set persistent auth state
  //         const credential = firebase.auth.FacebookAuthProvider.credential(
  //           token
  //         );
  //         const facebookProfileData = await firebase
  //           .auth()
  //           .signInAndRetrieveDataWithCredential(credential); // Sign in with Facebook credential

  //         // const response = await fetch(
  //         //   `https://graph.facebook.com/me?access_token=${token}`
  //         // );
  //         // console.log(response);

  //         // Do something with Facebook profile data
  //         // OR you have subscribed to auth state change, authStateChange handler will process the profile data

  //         return Promise.resolve({ type: "success" });
  //       }

  //       case "cancel": {
  //         return Promise.reject({ type: "cancel" });
  //       }
  //     }
  //   } catch ({ message }) {
  //     console.log(`Facebook Login Error: ${message}`);
  //   }
  // }

  // If, however, you are using only Firebase Auth, you will need to refresh the token every hour
  // To refresh user’s auth token, simply run:
  // firebase.auth().currentUser.getIdToken(true);

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

          <ButtonAuthMode
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <ButtonAuthModeLabel>
              Don't have an account? <Link>Sign Up</Link>
            </ButtonAuthModeLabel>
          </ButtonAuthMode>

          {/* <ButtonConfirm onPress={signInWithFacebook}>
            <ButtonGradient
              colors={["#986EFF", "#6D5CFF"]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <ButtonConfirmLabel>Facebook</ButtonConfirmLabel>
            </ButtonGradient>
          </ButtonConfirm> */}
        </FormContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
