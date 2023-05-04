import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { RegistrationScreenStyles as styles } from "./RegistrationScreenStyles";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} />
        <TouchableOpacity activeOpacity={0.4} style={styles.avatarButton}>
          <Text style={styles.avatarButtonText}>&#43;</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.formTitle}>Registration</Text>
      <RegistrationForm />
    </View>
  );
};
