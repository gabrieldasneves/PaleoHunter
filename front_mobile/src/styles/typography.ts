import { TextStyle } from "react-native";

export const fontFamily = {
  bold: "700" as const,
  medium: "500" as const,
  regular: "400" as const,
  semiBold: "600" as const,
};

export const typography: Record<string, TextStyle> = {
  titleXl: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: fontFamily.bold,
  },
  titleLg: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: fontFamily.bold,
  },
  titleMd: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontFamily.semiBold,
  },
  titleSm: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: fontFamily.semiBold,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: fontFamily.medium,
  },
  action: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontFamily.semiBold,
  },
  textMd: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontFamily.regular,
  },
  textSm: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: fontFamily.regular,
  },
  textXs: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: fontFamily.regular,
  },
};
