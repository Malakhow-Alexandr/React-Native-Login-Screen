import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LoginFormStyles as styles } from "./LoginScreenFormStyle";
import { useKeyboard } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";

export const LoginForm = () => {
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = { email, password };

  const handleFormSubmit = () => {
    if (!email || !password) {
      return alert("please enter your data");
    }
    navigation.navigate("Home");
    setEmail("");
    setPassword("");
  };

  const navigation = useNavigation();
  const { keyboardShown } = useKeyboard();
  return (
    <View style={styles.formContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.formInput}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={securePassword}
            style={styles.formInput}
          />
          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.secureButton}
            onPress={() => {
              setSecurePassword(!securePassword);
            }}
          >
            {securePassword ? (
              <Text style={styles.secureButtonText}>Show</Text>
            ) : (
              <Text style={styles.secureButtonText}>Hide</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View
        style={
          !keyboardShown ? styles.submitButtonContainer : styles.visuallyHidden
        }
      >
        <TouchableOpacity activeOpacity={0.4} style={styles.submitButton}>
          <Text style={styles.submitButtonText} onPress={handleFormSubmit}>
            Sing In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.singInLink}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.singInLinkText}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
