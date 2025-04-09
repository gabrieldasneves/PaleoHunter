import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.avatar}
          />
        </View>
        <Text style={[styles.name, typography.titleXl]}>Nome do Usuário</Text>
        <Text style={[styles.email, typography.textMd]}>usuario@email.com</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, typography.titleLg]}>12</Text>
          <Text style={[styles.statLabel, typography.textSm]}>Achados</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, typography.titleLg]}>3</Text>
          <Text style={[styles.statLabel, typography.textSm]}>Badges</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, typography.titleMd]}>
          Meus Achados
        </Text>
        <View style={styles.fossilList}>
          {/* Fossil items will be added dynamically */}
          <View style={styles.fossilItem}>
            <Image
              source={{ uri: "https://via.placeholder.com/80" }}
              style={styles.fossilImage}
            />
            <View style={styles.fossilInfo}>
              <Text style={[styles.fossilTitle, typography.titleSm]}>
                Fóssil de Dinossauro
              </Text>
              <Text style={[styles.fossilDate, typography.textXs]}>
                15/03/2024
              </Text>
              <Text style={[styles.fossilLocation, typography.textSm]}>
                São Paulo, SP
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brown.light,
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.brown.strong,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.gray[100],
    marginBottom: 10,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  name: {
    color: colors.brown.light,
    marginBottom: 5,
  },
  email: {
    color: colors.brown.light,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: colors.brown.middle,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    color: colors.brown.light,
  },
  statLabel: {
    color: colors.brown.light,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: colors.brown.strong,
    marginBottom: 15,
  },
  fossilList: {
    gap: 15,
  },
  fossilItem: {
    flexDirection: "row",
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    padding: 10,
  },
  fossilImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  fossilInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  fossilTitle: {
    color: colors.brown.strong,
    marginBottom: 5,
  },
  fossilDate: {
    color: colors.gray[400],
    marginBottom: 5,
  },
  fossilLocation: {
    color: colors.brown.strong,
  },
});
