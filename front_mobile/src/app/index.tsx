import { View, Text } from "react-native";
import { colors } from "../styles/colors";
import { Welcome } from "@/components/welcome";
import { ButtonFlowList } from "@/components/buttonFlowList";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40,
      }}
    >
      <Welcome />
      <ButtonFlowList />
    </View>
  );
}
