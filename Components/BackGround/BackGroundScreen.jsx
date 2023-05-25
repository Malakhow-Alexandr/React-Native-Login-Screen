import React from "react";
import {
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BackGroundScreenStyle as styles } from "./BackGroundScreenStyle";
import BgImage from "../../assets/images/BG-2x.jpg";

export const BackGroundScreen = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.image}
        >
          {children}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
