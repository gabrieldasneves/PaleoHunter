import { Image, Text, View } from "react-native";
import { s } from "@/src/components/organisms/welcome/styles";

export function Welcome() {
  return (
    <View>
      {/* <Image
        source={require("../../../assets/images/redCirculeAndTori.png")}
        style={s.logo}
      /> */}
      <Text style={s.title}>Welcome</Text>
      <Text style={s.subtitle}>text goes here</Text>
    </View>
  );
}
