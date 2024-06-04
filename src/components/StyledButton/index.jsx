import { Button } from "react-native-paper";
import { height, width } from "../../constants/measures";

export default function StyledButton(props){
    return (
        <Button 
            mode="contained" 
            buttonColor="#99272d" 
            labelStyle={{fontSize: 32, lineHeight: 32}} 
            style={{height: height*0.07, width: width*0.9 , borderRadius: 100, justifyContent: "center"}} 
            children={props.children}
        />
    )
}