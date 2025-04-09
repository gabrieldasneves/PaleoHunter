import { useEffect, useState } from "react";
import { Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { Loading } from "@/src/components/atoms/loading";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Livvic_400Regular: require("@expo-google-fonts/livvic/Livvic_400Regular.ttf"),
    Livvic_500Medium: require("@expo-google-fonts/livvic/Livvic_500Medium.ttf"),
    Livvic_600SemiBold: require("@expo-google-fonts/livvic/Livvic_600SemiBold.ttf"),
    Livvic_700Bold: require("@expo-google-fonts/livvic/Livvic_700Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [fontsLoaded]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.orange.strong,
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.brown.light,
          borderTopColor: colors.brown.middle,
        },
        headerStyle: {
          backgroundColor: colors.brown.strong,
        },
        headerTintColor: colors.brown.light,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map-marker" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Registrar",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
