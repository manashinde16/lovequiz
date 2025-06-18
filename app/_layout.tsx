import { ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  getToken: SecureStore.getItemAsync,
  saveToken: SecureStore.setItemAsync,
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <ClerkProvider
      publishableKey="pk_test_aHVtYW5lLWJhc3MtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA"
      tokenCache={tokenCache}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
      <StatusBar style="auto" />
    </ClerkProvider>
  );
}
