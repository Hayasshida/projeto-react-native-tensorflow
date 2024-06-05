import { Text } from "react-native-paper"

export default function TextWhite(props){
    return (
        <Text style={{color: props.color || "white", fontSize: props.size || 16, fontWeight: props.weight || "normal"}}>
            {props.children}
        </Text>
    )
}