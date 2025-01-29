import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";

export const s = StyleSheet.create({
  background: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    width: 280,
    height: 280,
    marginLeft: "15%",
    gap: 30,
  },
  logoText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 40,
    color: colors.brown.strong,
  },
  tinyLogo: { marginTop: 40, width: 500, height: 500 },
  text: {
    color: "white",
    marginTop: "-25%",
    marginLeft: "20%",
  },
  signup: {
    backgroundColor: colors.brown.light,
    width: "75%",
    borderRadius: 25,
    marginLeft: "11%",
    padding: "2%",
    marginTop: "85%",
  },
  signupText: {
    color: colors.green.rifle_green,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: fontFamily.bold,
  },
  login: {
    backgroundColor: colors.green.dark,
    color: colors.brown.light,
    width: "75%",
    borderRadius: 25,
    marginLeft: "11%",
    padding: "2%",
    marginTop: "10%",
    borderColor: colors.brown.light,
    borderWidth: 1,
  },
  loginText: {
    color: colors.brown.light,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: fontFamily.bold,
  },
});
