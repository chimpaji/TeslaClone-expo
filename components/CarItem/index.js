import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton/index";
// import carData from "../../assets/cars";

// const modelS = carData[0];

const CarItem = ({ car }) => {
  const { name, tagline, image, taglineCTA } = car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton type="primary" content="Custom order" />
          <StyledButton type="secound" content="Existing inventory" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarItem;
