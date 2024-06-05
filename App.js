import { KeyboardAvoidingView, SafeAreaView, View, FlatList } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native-paper';
import styles from './src/constants/styles';
import toxicityTest from './src/lib/toxicity';
import ToxicityIndicator from './src/components/ToxicityIndicator';
import StyledInputText from './src/components/StyledInputText';
import StyledButton from './src/components/StyledButton';
import i18n from './src/constants/i18n';


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState("")
  
  const classify = async (text) => {
      const response = await toxicityTest(text)
      setIsLoading(false)  
      console.log(response)
  }; 

  return (
    <SafeAreaView style={styles.container}> 
        <StatusBar style='light'/>
        <ToxicityIndicator/>
        {isLoading && <View style={styles.load}><ActivityIndicator size="large" color="#99272d" /></View>}
        <FlatList style={styles.list}></FlatList>
        <KeyboardAvoidingView enabled behavior="position">
          <StyledInputText placeholder={i18n.t("placeholder")} onChangeText={setText} value={text}/>
          <StyledButton children={i18n.t("button")} onPress={() => {classify(text); setIsLoading(true)}}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
