import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Counter from "./Counter";
import Profile from "./Profile";

export default function Index() {
  const [nameInput, setNameInput] = useState("");
  const [finalName, setFinalName] = useState("Anonymous");
  const [finalAge, setFinalAge] = useState(0);

  const handlePassValue = (currentAge: number) => {
    setFinalName(nameInput === "" ? "Anonymous" : nameInput);
    setFinalAge(currentAge);
  };

  return (
    <View style={styles.container}>
      <Profile name={finalName} age={finalAge} />

      <Counter onPassValue={handlePassValue} />

      <TextInput
        style={styles.input}
        placeholder="Input your name here"
        value={nameInput}
        onChangeText={(text) => setNameInput(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20,
  },
});
