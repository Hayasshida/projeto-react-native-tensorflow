import { SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styles from './src/constants/styles';
import toxicityTest from './src/lib/toxicity';
import { StatusBar } from 'expo-status-bar';
import ToxicityIndicator from './src/components/ToxicityIndicator';
import StyledInputText from './src/components/StyledInputText';
import StyledButton from './src/components/StyledButton';
import { FlatList } from 'react-native';


export default function App() {
  let [isLoading, setIsLoading] = useState(false)

  const teste = async () => {
      const response = await toxicityTest("you suck")
      setIsLoading(false)  
      console.log(response);
  }; 

  return (
    isLoading ? 
    <SafeAreaView style={{width: "100%", height: "100%", justifyContent: "center"}}> 
    <ActivityIndicator size='large' />
    </SafeAreaView>
    
    :

    <SafeAreaView style={styles.container}> 
        <StatusBar style='light'/>
        <ToxicityIndicator/>
        <FlatList style={styles.list}></FlatList>
        <StyledInputText placeholder="Digite aqui..."/>
        <StyledButton children="Verificar"/>
    </SafeAreaView>
  );
}
