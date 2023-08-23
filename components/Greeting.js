// Gretting.js
import React from "react";
import { View, Text } from "react-native";

const Greeting = ({ message }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{message}</Text>
    </View>
  );
};

export default Greeting;