import React from "react";
import { Text, View } from "react-native";
import isOdd from "is-odd";

export const HelloWorld = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>cool-package</Text>
      <Text>"is-odd": "3.0.1"</Text>
      <Text>is 1 odd? {isOdd(1) ? "yes" : "no"}</Text>
    </View>
  );
};
