import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    height: Dimensions.get("screen").height,
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
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  subtitleCTA: {
    fontSize: 16,
    color: "#5c5e62",
    textDecorationLine: "underline",
  },
});
