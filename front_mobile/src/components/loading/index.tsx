import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.blue.base} />
    </View>
  );
}
