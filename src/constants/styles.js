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
        height: height*0.4,
        width: width*0.9,
        flexGrow: 0,
    },
    card: {
        marginVertical: 10,
        backgroundColor: "white",
        elevation: 4,   
    },
    load: {
        height: height,
        width: width,
        backgroundColor: "#00000050",
        justifyContent: "center",
        zIndex: 1,
        position: "absolute",
    }
});

export default styles;