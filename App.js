import { KeyboardAvoidingView, SafeAreaView, View, FlatList } from 'react-native';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native-paper';
import styles from './src/constants/styles';
import toxicityTest from './src/lib/toxicity';
import ToxicityIndicator from './src/components/ToxicityIndicator';
import StyledInputText from './src/components/StyledInputText';
import StyledButton from './src/components/StyledButton';
import { en, ptBr, es } from './src/constants/languages';



export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState("")
  const [locale, setLocale] = useState(Localization.getLocales());

  i18n.fallbacks = true
  i18n.translations = {en, ptBr, es}
  i18n.Locales = locale

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
          <StyledButton children={i18n.t("button")} onPress={() => {classify(text); setIsLoading(true)}}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
