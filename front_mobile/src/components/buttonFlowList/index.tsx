import { View, Text } from "react-native";
import { styles } from "./styles";
import { ButtonFlow } from "../buttonFlow";
import { IconPin, IconMap } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

export function ButtonFlowList() {
  return (
    <View style={styles.container}>
      <ButtonFlow
        onPress={() => {
          return null;
        }}
        title="Explore"
        subtitle="Find places where people have found fossils"
        icon={<IconMap color={colors.brown.middle} />}
      />
      <ButtonFlow
        onPress={() => {
          return null;
        }}
        title="Register"
        subtitle="Did you find a fossil? Let’s register so others can check this place to find more"
        icon={<IconPin color={colors.brown.middle} />}
      />
    </View>
  );
}
