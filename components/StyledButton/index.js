import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./style";

const StyledButton = ({ type, content }) => {
  const backgroundColor = type === "primary" ? "black" : "white";
  const textColor = type === "primary" ? "white" : "black";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={() => {
          console.log("hey there");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
