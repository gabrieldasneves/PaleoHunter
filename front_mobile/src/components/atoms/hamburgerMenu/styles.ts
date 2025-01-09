import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.gray[100],
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.brown.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  menuLinesContainer: {
    flexDirection: "column",
  },
  lineStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  middleLine: {
    height: 2,
    width: 30,
    borderRadius: 4,
    backgroundColor: colors.brown.dark,
    marginVertical: 3,
  },
  lineEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  shortLine: {
    height: 2,
    width: 15,
    borderRadius: 4,
    backgroundColor: colors.brown.dark,
  },
});
