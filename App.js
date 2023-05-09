import React from "react";

import { RegistrationScreen } from "./screens/auth/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./screens/auth/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateScreen from "./screens/mainScreen/CreateScreen/CreateScreen";
import PostScreen from "./screens/mainScreen/PostsScreen/PostScreen";
import "react-native-gesture-handler";
import ProfileScreen from "./screens/mainScreen/ProfileScreen/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isLogin) => {
  if (!isLogin) {
    return (
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator initialRouteName="Posts">
      <MainTab.Screen name="Create" component={CreateScreen} />
      <MainTab.Screen name="Posts" component={PostScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

const App = () => {
  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
