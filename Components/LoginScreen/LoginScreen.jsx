import { View, Text } from "react-native";
import { LoginScreenStyles as styles } from "./LoginScreenStyle";
import { LoginForm } from "../LoginScreenForm/LoginScreenForm";
export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Sing In</Text>
      <LoginForm />
    </View>
  );
};
