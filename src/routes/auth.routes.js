import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Loading from "../screens/Loading";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const AuthStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AuthStack.Navigator
      initialRouteName="Loading"
      headerMode="none"
      options={{ animationEnabled: false }}
    >
      <AuthStack.Screen name="Loading" component={Loading} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}
