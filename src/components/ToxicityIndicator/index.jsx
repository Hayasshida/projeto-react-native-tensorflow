import { useEffect, useState } from "react";
import TextWhite from "../TextWhite";
import { View } from "react-native";

export default function ToxicityIndicator(props){
    const [text, setText] = useState("Verifique a agressividade de seu texto");
    
    // if(){
        
    // }else{
        
    // }

    return (
        <View>
            <TextWhite size={48} weight="bold">
                {text}
            </TextWhite>
        </View>
    );
}