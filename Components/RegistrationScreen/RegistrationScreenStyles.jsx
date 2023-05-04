import { StyleSheet } from "react-native";

export const RegistrationScreenStyles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    marginTop: "auto",
    width: "100%",
    height: "68%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 79,
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatarContainer: {
    flex: 1,
    width: 132,
    height: 120,
    position: "absolute",
    top: "-17%",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 25,
    backgroundColor: "#F6F6F6",
  },
  avatarButton: {
    position: "absolute",
    top: 80,
    left: 107,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarButtonText: {
    color: "#FF6C00",
    fontSize: 17,
  },
  formTitle: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 500,
    marginBottom: 32,
  },
});
