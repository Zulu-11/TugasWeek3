import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ProfileProps = {
  name: string;
  age: number;
};

export default function Profile({ name, age }: ProfileProps) {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.text}>Halo, nama saya {name}!</Text>
      <Text style={styles.text}>Umur saya {age} tahun</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    marginVertical: 4
  }
});
