// app/(tabs)/index.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { SignOutButton } from "../../components/SignOutButton";
import { questions } from "../../utils/questions";

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const fadeAnim = useState(new Animated.Value(1))[0];
  const router = useRouter();

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      const updatedAnswers = [
        ...selectedAnswers,
        { question: currentQuestion.text, answer: option },
      ];
      setSelectedAnswers(updatedAnswers);

      if (updatedAnswers.length === 10) {
        router.push({
          pathname: "/ResultScreen",
          params: {
            selectedAnswers: JSON.stringify(updatedAnswers),
          },
        });
      } else {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={{ flex: 1 }} />
        <SignOutButton />
      </View>

      <Text style={styles.title}>Hi Beautiful 💖</Text>
      <Text style={styles.subtitle}>Ready for your questions?</Text>

      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.question}>{currentQuestion.text}</Text>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              selectedOption === option ? styles.selectedOption : null,
            ]}
            onPress={() => handleSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F5",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#D63384",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#6C3483",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#FFE4E1",
    padding: 25,
    borderRadius: 20,
    elevation: 4,
  },
  question: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    color: "#4A148C",
    textAlign: "center",
  },
  option: {
    backgroundColor: "#FADADD",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: "#F06292",
    borderColor: "#AD1457",
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});
