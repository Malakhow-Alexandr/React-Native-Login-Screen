import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import "react-native-gesture-handler";

const App = () => {
  const routing = useRoute(null);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
