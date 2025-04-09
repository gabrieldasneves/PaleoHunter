import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

interface FossilMarkerProps {
  title: string;
  type: string;
  imageUrl: string;
}

export function FossilMarker({ title, type, imageUrl }: FossilMarkerProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={[styles.title, typography.titleSm]}>{title}</Text>
        <Text style={[styles.type, typography.textXs]}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: colors.brown.light,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.brown.middle,
  },
  image: {
    width: "100%",
    height: 120,
  },
  content: {
    padding: 8,
  },
  title: {
    color: colors.brown.strong,
    marginBottom: 4,
  },
  type: {
    color: colors.gray[400],
  },
});
