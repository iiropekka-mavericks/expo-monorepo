import React from "react";
import { HelloWorld as Cool } from "cool-package";
import { HelloWorld as Warm } from "warm-package";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import isOdd from "is-odd";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>own dependency</Text>
        <Text>"is-odd": "2.0.0"</Text>
        <Text>is 1 odd? {isOdd(1) ? "yes" : "no"}</Text>
      </View>

      <Cool />
      <Warm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
