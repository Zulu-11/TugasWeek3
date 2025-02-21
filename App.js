import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Counter from "./Counter";
import Profile from "./Profile";

export default function App() {
  // State untuk menampung input nama (TextField)
  const [nameInput, setNameInput] = useState("");

  // State untuk menyimpan nilai yang akan ditampilkan di Profile
  // (default "Anonymous" dan 0 jika tombol PASS VALUE belum ditekan)
  const [finalName, setFinalName] = useState("Anonymous");
  const [finalAge, setFinalAge] = useState(0);

  // Fungsi untuk menerima "pass value" dari komponen Counter
  const handlePassValue = (currentAge) => {
    // Jika nameInput kosong, tetap "Anonymous"
    setFinalName(nameInput === "" ? "Anonymous" : nameInput);
    setFinalAge(currentAge);
  };

  return (
    <View style={styles.container}>
      {/* Komponen Profile menampilkan nama dan umur */}
      <Profile name={finalName} age={finalAge} />

      {/* Komponen Counter (increment, decrement, pass value) */}
      <Counter onPassValue={handlePassValue} />

      {/* TextField (TextInput) untuk mengisi nama */}
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
    padding: 16
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20
  }
});
