import { KeyboardAvoidingView, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import styles from './src/constants/styles';
import toxicityTest from './src/lib/toxicity';
import { StatusBar } from 'expo-status-bar';
import ToxicityIndicator from './src/components/ToxicityIndicator';
import StyledInputText from './src/components/StyledInputText';
import StyledButton from './src/components/StyledButton';
import { FlatList } from 'react-native';
import TextWhite from './src/components/TextWhite';


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState("")
  const [printText, setPrintText] = useState('');

  const classify = async (text, printText) => {
      const response = await toxicityTest(text, printText);
      setPrintText(response.printText);
      setIsLoading(false)
  }; 

  return (
    <SafeAreaView style={styles.container}> 
        <StatusBar style='light'/>
        {printText === '' 
        ? 
          <TextWhite children="Verifique a agressividade de seu texto" size={48} weight="bold"/>
        : printText !== 'nothing' ?
          <TextWhite children={`Seu texto contém ${printText}`} size={48} weight="bold"/>
        :
          <TextWhite children={`Seu texto não contém toxicidade`} size={48} weight="bold"/>
        }
        {/* <ToxicityIndicator/> */}
        {isLoading && <View style={styles.load}><ActivityIndicator size="large" color="#99272d" /></View>}
        <FlatList style={styles.list}/>
        <KeyboardAvoidingView enabled behavior="position">
          <StyledInputText placeholder="Digite aqui..." onChangeText={setText} value={text}/>
          <StyledButton disabled={text === "" ? true : false } children="Verificar" onPress={() => {classify(text, printText); setIsLoading(true)}}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
