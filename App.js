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
import { height } from './src/constants/measures';


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
          <StyledInputText placeholder="Digite aqui..." onChangeText={setText} value={text}/>
          <StyledButton children="Verificar" onPress={() => {classify(text); setIsLoading(true)}}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
