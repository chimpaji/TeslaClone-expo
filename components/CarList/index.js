import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from "./cars";
import CarItem from "../CarItem";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate="normal"
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default CarList;
