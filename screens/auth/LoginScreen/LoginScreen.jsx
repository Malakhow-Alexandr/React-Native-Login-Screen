import { View, Text } from "react-native";
import { LoginScreenStyles as styles } from "./LoginScreenStyle";
import { LoginForm } from "../../../Components/LoginScreenForm/LoginScreenForm";
import { useKeyboard } from "@react-native-community/hooks";
import { BackGroundScreen } from "../../../Components/BackGround/BackGroundScreen";

export const LoginScreen = () => {
  const { keyboardShown } = useKeyboard();

  return (
    <BackGroundScreen>
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
    </BackGroundScreen>
  );
};
