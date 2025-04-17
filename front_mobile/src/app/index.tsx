import { View, Text } from "react-native";
import { colors } from "../styles/colors";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.brown.strong,
      }}
    >
      <Text style={{ color: "white" }}>Hello World</Text>
    </View>
  );
}
