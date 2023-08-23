import React from "react";
import { View, Text } from "react-native";

const Greeting = ({ message, style }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={[{ fontSize: 24, fontWeight: "bold" }, style]}>
        {message}
      </Text>
    </View>
  );
};

export default Greeting;