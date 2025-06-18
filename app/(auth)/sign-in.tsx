// app/sign-in.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter, Link } from "expo-router";

export default function SignInScreen() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setActive({ session: result.createdSessionId });
      router.replace("/(tabs)");
    } catch (err: any) {
      setError("Incorrect email or password.");
      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Welcome Back My Love💖</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={emailAddress}
        onChangeText={setEmailAddress}
        autoCapitalize="none"
        placeholder="you@example.com"
        keyboardType="email-address"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={onSignInPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signUpRow}>
        <Text style={styles.secondaryText}>Don’t have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.signUpLink}>Sign up</Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d63384",
    textAlign: "center",
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    color: "#c2185b",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    height: 48,
    backgroundColor: "#fff",
    borderColor: "#f48fb1",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ec407a",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUpRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  secondaryText: {
    color: "#7c2a53",
    marginRight: 4,
  },
  signUpLink: {
    color: "#c2185b",
    fontWeight: "600",
  },
  error: {
    color: "#ff1744",
    textAlign: "center",
    marginTop: 10,
  },
});
