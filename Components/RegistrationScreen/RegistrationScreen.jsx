import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import { RegistrationScreenStyles as styles } from "./RegistrationScreenStyles";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { AvatarContainer } from "../AvatarContainer/AvatarContainer";

export const RegistrationScreen = () => {
  const { keyboardShown } = useKeyboard();
  return (
    <View style={styles.container}>
      <AvatarContainer />
      <Text style={styles.formTitle}>Registration</Text>
      <RegistrationForm />
    </View>
  );
};
