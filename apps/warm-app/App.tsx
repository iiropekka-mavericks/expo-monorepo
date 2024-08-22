import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import isEven from "is-even";
import isOdd from "is-odd";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 20,
      }}
    >
      <View>
        <Text>own dependency</Text>
        <Text>"is-even": "^1.0.0",</Text>
        <Text>is 1 even? {isEven(1) ? "yes" : "no"}</Text>
      </View>
      <View>
        <Text>own dependency</Text>
        <Text>"is-odd": "3.0.1"</Text>
        <Text>is 1 odd? {isOdd(1) ? "yes" : "no"}</Text>
      </View>
    </View>
  );
}
