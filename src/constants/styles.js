import { StyleSheet } from "react-native";
import { height, width } from "./measures";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b1027",
        width: width,
        height: height,
        alignItems: "center",
        paddingTop: height*0.15,
        gap: height*0.013,
    },
    list: {
        backgroundColor: "white",
        height: height*0.4,
        width: width*0.9,
        flexGrow: 0
    }
});

export default styles;