import { colors } from "@/src/styles/theme";
import { View, ImageBackground, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Initial } from "../components/organisms/pages/login";
import { Welcome } from "../components/organisms/pages/welcome";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/src/assets/bones.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <StatusBar translucent backgroundColor="transparent" />
        <Initial />
      </ImageBackground>
      {/* <Welcome /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
