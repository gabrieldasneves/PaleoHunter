import { Image, Text, View } from "react-native";
import { s } from "@/src/components/molecules/welcome/styles";

export function Welcome() {
  return (
    <View>
      <Image source={require("../../../assets/logo.png")} style={s.logo} />
      <Text style={s.title}>Welcome to _NAME_</Text>
      <Text style={s.subtitle}>Find or register fossils around you!</Text>
    </View>
  );
}
