import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface CounterProps {
  onPassValue: (value: number) => void;
}

export default function Counter({ onPassValue }: CounterProps) {
  const [age, setAge] = useState(0);

  const handleIncrement = () => {
    setAge(age + 1);
  };

  const handleDecrement = () => {
    if (age > 0) {
      setAge(age - 1);
    }
  };

  const handlePassValue = () => {
    onPassValue(age);
  };

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.ageText}>{age}</Text>

      <View style={styles.buttonContainer}>
        <Button title="INCREMENT" onPress={handleIncrement} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="DECREMENT" onPress={handleDecrement} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="PASS VALUE" onPress={handlePassValue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  ageText: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 5, 
    width: 150,        
  },
});
