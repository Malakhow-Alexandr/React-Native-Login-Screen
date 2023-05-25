import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import { RegistrationScreenStyles as styles } from "./RegistrationScreenStyles";
import { RegistrationForm } from "../../../Components/RegistrationForm/RegistrationForm";
import { AvatarContainer } from "../../../Components/AvatarContainer/AvatarContainer";
import { BackGroundScreen } from "../../../Components/BackGround/BackGroundScreen";

export const RegistrationScreen = () => {
  const { keyboardShown } = useKeyboard();

  return (
    <BackGroundScreen>
      <View style={styles.container}>
        <AvatarContainer />
        <Text style={styles.formTitle}>Registration</Text>
        <RegistrationForm />
      </View>
    </BackGroundScreen>
  );
};
