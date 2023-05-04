import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { LoginFormStyles as styles } from "./LoginScreenFormStyle";

export const LoginForm = () => {
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
      <TouchableOpacity activeOpacity={0.4} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={styles.singInLink}>
        <Text style={styles.singInLinkText}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
