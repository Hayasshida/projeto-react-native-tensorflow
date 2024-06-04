import { useState } from "react";
import TextWhite from "../Text";
import { View } from "react-native";

export default function ToxicityIndicator(props){
    const [text, setText] = useState("Verifique a agressividade de seu texto");

    props.classification?.forEach(classification => {
        switch (classification[0]){
            case "insult":
                setText("insult")
                break;
            
            case "identity attack":
                setText("identity attack")
                break;
            
            case "obscene":
                setText("obscene")
                break;
            
            case "severe toxicity":
                setText("severe toxicity")
                break;
            
            case "sexual explicit":
                setText("sexual explicit")
                break;
            
            case "threat":
                setText("threat")
                break;

            case "toxicity":
                setText("toxicity")
                break;

            default: 
                setText("Verifique a agressividade de seu texto")

        }
    });

    return (
        <View>
            <TextWhite size={48} weight="bold">
                {text}
            </TextWhite>
        </View>
    );
}