import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
// import carData from "../../assets/cars";

// const modelS = carData[0];

const CarItem = ({ car }) => {
  //   const { name, tagline, image } = car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarItem;
