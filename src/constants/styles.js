import { StyleSheet } from "react-native";
import { height, width } from "./measures";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b1027",
    width: width,
    height: height,
    alignItems: "center",
    paddingVertical: height * 0.06,
    gap: height * 0.013,
  },
  list: {
    height: height * 0.52,
    width: width * 0.9,
    flexGrow: 0,
  },
  load: {
    height: height,
    width: width,
    backgroundColor: "#00000050",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute",
  },
  card: {
    marginVertical: 10,
    backgroundColor: "white",
    elevation: 4,   
},
});

export default styles;
