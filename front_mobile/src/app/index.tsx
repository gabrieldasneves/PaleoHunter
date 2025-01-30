import { colors } from "@/src/styles/theme";
import { View, ImageBackground, StyleSheet, StatusBar } from "react-native";
import { Initial } from "../components/organisms/pages/initial";
import { Home } from "../components/organisms/pages/home";

export default function Index() {
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
      {/* <Home /> */}
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
