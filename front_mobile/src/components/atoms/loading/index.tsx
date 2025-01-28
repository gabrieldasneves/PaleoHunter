import { s } from "@/src/components/atoms/loading/styles";
import { colors } from "@/src/styles/colors";
import React from "react";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator
      color={colors.green.dark}
      style={s.container}
    ></ActivityIndicator>
  );
}
