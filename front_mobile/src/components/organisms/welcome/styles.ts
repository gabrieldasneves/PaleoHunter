import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";

export const s = StyleSheet.create({
  logo: {
    width: 40,
    height: 100,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});
