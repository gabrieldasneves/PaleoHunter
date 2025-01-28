import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";

export const s = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    gap: 40,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.brown.dark,
    maxHeight: 364,
    minWidth: 300,
    padding: 40,
    borderRadius: 16,
    backgroundColor: colors.gray[100],
    opacity: 0.7,
  },

  logo: {
    width: 40,
    height: 100,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.brown.dark,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.brown.dark,
    marginTop: 12,
  },
  sandwichMenu: {
    position: "absolute",
    top: 30,
    minWidth: 300,
    display: "flex",
    alignItems: "flex-end",
  },
});
