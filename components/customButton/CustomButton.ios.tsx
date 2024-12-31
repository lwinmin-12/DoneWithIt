import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: 15,
      padding: 10,
    }}
  >
    <Text style={{ color: "red", fontSize: 18 }}>{title}</Text>
  </Pressable>
);
export default CustomButton;
