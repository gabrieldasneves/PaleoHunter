import { colors } from "@/src/styles/theme";
import { View, ImageBackground, StyleSheet, StatusBar } from "react-native";
import { Initial } from "../components/organisms/pages/initial";
import { Home } from "../components/organisms/pages/home";
import { useRouter } from "expo-router";
import { LinearGradient } from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { typography } from "../styles/typography";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/src/assets/bones.jpeg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <StatusBar translucent backgroundColor="transparent" />
        <Initial />
      </ImageBackground>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    ...typography.titleXl,
    color: colors.brown.light,
    marginBottom: 10,
  },
  subtitle: {
    ...typography.textMd,
    color: colors.brown.light,
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.orange.strong,
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    ...typography.action,
    color: colors.brown.light,
  },
});
