import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onPress: () => void;
};

export function ButtonFlow({ title, subtitle, icon, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text>{icon}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}
