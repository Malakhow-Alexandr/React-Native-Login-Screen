import React from "react";
import { RegistrationScreen } from "./screens/auth/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./screens/auth/LoginScreen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/mainScreen/HomeScreen/HomeScreen";

const MainStack = createStackNavigator();

export const useRoute = (isLogin) => {
  if (!isLogin) {
    return (
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
      </MainStack.Navigator>
    );
  }
};
