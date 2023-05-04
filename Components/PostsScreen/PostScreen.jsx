import React from "react";
import { ImageBackground, View } from "react-native";
import { PostScreenStyles as styles } from "./PostScreenStyle";
import BgImage from "../../assets/images/BG-2x.jpg";

export const PostScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};
