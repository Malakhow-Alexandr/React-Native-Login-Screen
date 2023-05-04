import React from "react";
import { PostScreen } from "./Components/PostsScreen/PostScreen";

import { RegistrationScreen } from "./Components/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Components/LoginScreen/LoginScreen";

const App = () => (
  <PostScreen>
    <RegistrationScreen />
    {/* <LoginScreen /> */}
  </PostScreen>
);

export default App;
