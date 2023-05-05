import { View, Text } from "react-native";
import { LoginScreenStyles as styles } from "./LoginScreenStyle";
import { LoginForm } from "../LoginScreenForm/LoginScreenForm";
import { useKeyboard } from "@react-native-community/hooks";

export const LoginScreen = () => {
  const { keyboardShown } = useKeyboard();

  return (
    <View
      style={
        keyboardShown
          ? { ...styles.container, transform: [{ translateY: 65 }] }
          : styles.container
      }
    >
      <Text style={styles.formTitle}>Sing In</Text>
      <LoginForm />
    </View>
  );
};
