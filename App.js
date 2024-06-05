import { KeyboardAvoidingView, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styles from './src/constants/styles';
import toxicityTest from './src/lib/toxicity';
import { StatusBar } from 'expo-status-bar';
import ToxicityIndicator from './src/components/ToxicityIndicator';
import StyledInputText from './src/components/StyledInputText';
import StyledButton from './src/components/StyledButton';
import { FlatList } from 'react-native';
import Message from './src/components/Message';
import { height } from './src/constants/measures';


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState("")
  const [history, setHistory] = useState([])

  const classify = async (text) => {
      const response = await toxicityTest(text)
      setIsLoading(false)  
      // const isToxic = response.some((predictions) => predictions.results[0].match)
      console.log(response)
  }; 

  return (
    <SafeAreaView style={styles.container}> 
        <StatusBar style='light'/>
        <ToxicityIndicator/>
        {isLoading && <View style={styles.load}><ActivityIndicator size="large" color="#99272d" /></View>}
        <FlatList style={styles.list}
        data={history}
        render={({message}) => <Message mensagem={message.mensagem}/>}
        />
           
      

        <KeyboardAvoidingView enabled behavior="position">
          <StyledInputText placeholder="Digite aqui..." onChangeText={setText} value={text}/>
          <StyledButton children="Verificar" onPress={() => {classify(text); setIsLoading(true); setHistory(text)}}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
