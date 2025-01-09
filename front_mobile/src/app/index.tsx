import { Welcome } from "@/src/components/organisms/welcome";
import { colors } from "@/src/styles/theme";
import { View, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  const image = require("@/src/assets/archeopterix.jpg");
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[100] }}>
      <View style={styles.overlay}>
        <Welcome />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
