import { Text } from "react-native-paper";
import { width } from "../../constants/measures";

export default function TextWhite(props) {
  return (
    <Text
      style={{
        color: props.color || "white",
        fontSize: props.size || 16,
        fontWeight: props.weight || "normal",
        width: props.width || "auto",
      }}
    >
      {props.children}
    </Text>
  );
}
