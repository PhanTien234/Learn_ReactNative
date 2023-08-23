import { React, useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [message, setMessage] = useState("Hello World!");

  const changeMessage = () => {
    setMessage("Hello from React Native!");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{message}</Text>
      <Button title="Change Message" onPress={changeMessage} />
    </View>
  );
}