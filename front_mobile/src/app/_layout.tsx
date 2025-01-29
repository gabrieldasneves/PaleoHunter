import { Stack } from "expo-router";
import { colors } from "../styles/colors";
import {
  useFonts,
  Livvic_600SemiBold,
  Livvic_400Regular,
  Livvic_500Medium,
  Livvic_700Bold,
} from "@expo-google-fonts/livvic";
import { Loading } from "@/src/components/atoms/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Livvic_600SemiBold,
    Livvic_400Regular,
    Livvic_500Medium,
    Livvic_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  );
}
