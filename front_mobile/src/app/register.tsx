import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

export default function RegisterScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, typography.titleXl]}>Registrar Achado</Text>

        <View style={styles.formGroup}>
          <Text style={[styles.label, typography.textMd]}>Tipo de Fóssil</Text>
          <TextInput
            style={[styles.input, typography.textMd]}
            placeholder="Ex: Osso, Pegada, Âmbar"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={[styles.label, typography.textMd]}>Localização</Text>
          <TextInput
            style={[styles.input, typography.textMd]}
            placeholder="Coordenadas (serão preenchidas automaticamente)"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={[styles.label, typography.textMd]}>Idade Estimada</Text>
          <TextInput
            style={[styles.input, typography.textMd]}
            placeholder="Ex: 65 milhões de anos"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={[styles.label, typography.textMd]}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.textArea, typography.textMd]}
            placeholder="Descreva o achado"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, typography.action]}>
            Adicionar Foto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.submitButton]}>
          <Text style={[styles.buttonText, typography.action]}>
            Registrar Achado
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brown.light,
  },
  content: {
    padding: 20,
  },
  title: {
    color: colors.brown.strong,
    marginBottom: 30,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    color: colors.brown.strong,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    padding: 12,
    color: colors.brown.strong,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: colors.orange.strong,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: colors.brown.strong,
    marginTop: 10,
  },
  buttonText: {
    color: colors.brown.light,
  },
});
