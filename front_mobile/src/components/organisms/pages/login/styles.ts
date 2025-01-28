import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";

export const s = StyleSheet.create({
  background: {
    flex: 1,
  },
  logo: {
    width: 280,
    height: 280,
    marginLeft: "15%",
    marginTop: "10%",
  },

  text: {
    color: "white",
    marginTop: "-25%",
    marginLeft: "20%",
  },
  signup: {
    backgroundColor: colors.brown.light,
    color: colors.brown.dark,
    width: "75%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "11%",
    padding: "2%",
    fontSize: 24,
    marginTop: "80%",
  },
  login: {
    backgroundColor: colors.brown.dark,
    color: colors.brown.light,
    width: "75%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "11%",
    padding: "2%",
    fontSize: 24,
    marginTop: "10%",
  },
});
