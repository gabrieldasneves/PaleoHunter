import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "@/src/components/organisms/pages/home/styles";
import { HamburgerMenu } from "@/src/components/atoms/hamburgerMenu";

export function Home() {
  return (
    <View style={s.page}>
      <View style={s.sandwichMenu}>
        <HamburgerMenu />
      </View>
      <TouchableOpacity
        style={s.button}
        onPress={() => {
          return;
        }}
      >
        <Text style={s.title}>Welcome</Text>
        <Text style={s.subtitle}>text goes here</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.button}
        onPress={() => {
          return;
        }}
      >
        <Text style={s.title}>Welcome</Text>
        <Text style={s.subtitle}>text goes here</Text>
      </TouchableOpacity>
    </View>
  );
}
