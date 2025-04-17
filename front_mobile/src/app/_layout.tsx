import { Stack } from "expo-router";
import { colors } from "../styles/colors";
import {
  useFonts,
  Livvic_400Regular,
  Livvic_500Medium,
  Livvic_600SemiBold,
  Livvic_700Bold,
} from "@expo-google-fonts/livvic";
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Livvic_400Regular,
    Livvic_500Medium,
    Livvic_600SemiBold,
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
