// app/(tabs)/ResultScreen.tsx

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { buildPromptFromAnswers } from "./ai/promptGenerator";
import { generateVibeAndPlan } from "./api/core";
import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

export default function ResultScreen() {
  const { selectedAnswers } = useLocalSearchParams();
  const parsedAnswers = JSON.parse(selectedAnswers as string);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const hasFetched = useRef(false);

  // Play romantic music once
  useEffect(() => {
    let sound: Audio.Sound;

    const playMusic = async () => {
      const { sound: playback } = await Audio.Sound.createAsync(
        require("../../assets/audio/romantic.mp3")
      );
      sound = playback;
      await sound.setIsLoopingAsync(true);
      await sound.playAsync();
    };

    playMusic();

    return () => {
      if (sound) sound.unloadAsync();
    };
  }, []);

  // Fetch result once only
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchData = async () => {
      try {
        const prompt = buildPromptFromAnswers(parsedAnswers);
        const aiOutput = await generateVibeAndPlan(prompt);
        setResult(aiOutput);
      } catch (err) {
        Alert.alert("Error", "Something went wrong while generating.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [parsedAnswers]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#D63384" />
        <Text style={styles.loadingText}>
          Crafting your dreamy moment... 💫
        </Text>
      </View>
    );
  }

  const lines = result?.split("\n") || [];
  const datePlan = lines
    .filter((line) => line.trim().length && line.length < 140)
    .slice(0, 4);
  const vibeLines = lines
    .filter((line) => line.trim().length && line.length > 10)
    .slice(-7);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Heart background animation */}
        <LottieView
          source={require("../../assets/animations/hearts.json")}
          autoPlay
          loop
          style={StyleSheet.absoluteFill}
        />

        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <Animatable.Text
            animation="fadeInDown"
            delay={300}
            style={styles.title}
          >
            🌸 Your Dream Date Plan
          </Animatable.Text>

          <Animatable.View animation="fadeInUp" delay={500}>
            {datePlan.map((line, idx) => (
              <Text key={idx} style={styles.resultText}>
                {line.trim()}
              </Text>
            ))}
          </Animatable.View>

          <Animatable.Text
            animation="fadeInDown"
            delay={700}
            style={styles.title}
          >
            💖 Your Vibe in Words
          </Animatable.Text>

          <Animatable.View animation="fadeInUp" delay={800}>
            {vibeLines.map((line, idx) => (
              <Text key={idx} style={styles.line}>
                {line.trim()}
              </Text>
            ))}
          </Animatable.View>

          {/* Sparkly Start Again */}
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            delay={1200}
            style={styles.buttonWrapper}
          >
            <TouchableOpacity onPress={() => router.replace("/")}>
              <LinearGradient
                colors={["#FF69B4", "#FFC0CB"]}
                start={[0, 0]}
                end={[1, 1]}
                style={styles.sparkleButton}
              >
                <Text style={styles.buttonText}>🔁 Start Again</Text>
                <View style={styles.sparkleOverlay}>
                  <LottieView
                    source={require("../../assets/animations/sparkle.json")}
                    autoPlay
                    loop
                    style={styles.sparkle}
                  />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </Animatable.View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF0F5",
  },
  loadingText: {
    marginTop: 20,
    color: "#8E44AD",
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D63384",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",
  },
  resultText: {
    fontSize: 18,
    color: "#4A148C",
    marginBottom: 10,
    lineHeight: 26,
    textAlign: "left",
  },
  line: {
    fontSize: 16,
    color: "#5D3A9B",
    marginBottom: 8,
    textAlign: "left",
  },
  buttonWrapper: {
    marginTop: 40,
    alignItems: "center",
  },
  sparkleButton: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FF69B4",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
    position: "relative",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    zIndex: 2,
  },
  sparkleOverlay: {
    position: "absolute",
    top: -15,
    right: -25,
    width: 100,
    height: 60,
    zIndex: 1,
  },
  sparkle: {
    width: 100,
    height: 60,
  },
});
