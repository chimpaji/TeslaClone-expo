import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    width: "100%",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 100, height: 20, resizeMode: "contain" },
  menu: { width: 20, height: 20, resizeMode: "contain" },
});
