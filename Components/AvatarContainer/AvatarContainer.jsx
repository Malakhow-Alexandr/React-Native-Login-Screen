import { View, Text, Image, TouchableOpacity } from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import { avatarContainerStyles as styles } from "./AvatarContainerStyles";

export const AvatarContainer = () => {
  const { keyboardShown } = useKeyboard();
  return (
    <View
      style={
        keyboardShown
          ? { ...styles.avatarContainer, transform: [{ translateY: -25 }] }
          : styles.avatarContainer
      }
    >
      <Image style={styles.avatar} />
      <TouchableOpacity activeOpacity={0.4} style={styles.avatarButton}>
        <Text style={styles.avatarButtonText}>&#43;</Text>
      </TouchableOpacity>
    </View>
  );
};
