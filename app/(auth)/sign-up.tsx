import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter, Link } from "expo-router";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  // STEP 1: Handle Sign Up
  const onSignUpPress = async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setPendingVerification(true);
    } catch (err: any) {
      Alert.alert("Sign Up Error", err.errors?.[0]?.message || "Try again.");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: Handle Verification
  const onVerifyPress = async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      const attempt = await signUp.attemptEmailAddressVerification({ code });

      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        Alert.alert("Success", "Your email has been verified!");

        // ✅ Redirect to home screen
        router.replace("/(tabs)");
      } else {
        Alert.alert("Pending", "Further steps required to complete sign-up.");
      }
    } catch (err: any) {
      Alert.alert(
        "Verification Failed",
        err.errors?.[0]?.message || "Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!pendingVerification ? (
        <>
          <Text style={styles.title}>Sign Up 💖</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Email"
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onSignUpPress}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Creating..." : "Continue"}
            </Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <Text>Already have an account? </Text>
            <Link href="/sign-in">
              <Text style={styles.link}>Sign in</Text>
            </Link>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Verify Email 📧</Text>
          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onVerifyPress}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Verifying..." : "Verify"}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#d63384",
  },
  input: {
    width: "100%",
    height: 50,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#d63384",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "#007bff",
    fontWeight: "bold",
  },
});
