import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarItem";
import CarList from "./components/CarList";
import Header from "./components/Header";
// import carItem from "./assets/cars";

// const modelS = carItem[0];

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
      <StatusBar style="auto" />
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
  carContainer: {
    height: "100%",
    width: "100%",
  },
  titles: {
    width: "100%",
    alignItems: "center",
    marginTop: "30%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
