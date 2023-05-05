import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RegistrationFormStyles as styles } from "./RegistrationFormStyles";

export const RegistrationForm = () => {
  const [securePassword, setSecurePassword] = useState(true);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
          style={styles.formInput}
        />
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
      <TouchableOpacity activeOpacity={0.4} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={styles.singInLink}>
        <Text style={styles.singInLinkText}>
          Already have an account? Sing In
        </Text>
      </TouchableOpacity>
    </View>
  );
};
