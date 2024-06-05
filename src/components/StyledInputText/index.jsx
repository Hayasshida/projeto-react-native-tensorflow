import { TextInput } from "react-native-paper";
import { height, width } from "../../constants/measures";

export default function StyledInputText(props){
    return (
        <TextInput 
            style={{ 
                    fontSize: 22,
                    marginBottom: height*0.013, 
                    borderTopLeftRadius: 28, 
                    borderTopRightRadius: 28, 
                    borderBottomLeftRadius: 28, 
                    borderBottomRightRadius: 28, 
                    height: height*0.1, 
                    backgroundColor: "#280d3e", 
                    width: width*0.9 
                }} 
            underlineStyle={{borderRadius: 100}} 
            activeUnderlineColor="transparent" 
            underlineColor="transparent" 
            textColor="white" 
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    );
}