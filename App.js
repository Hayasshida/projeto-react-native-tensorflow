import { KeyboardAvoidingView, SafeAreaView, View, FlatList } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import styles from './src/constants/styles';
import toxicityTest from './src/lib/toxicity';
import StyledInputText from './src/components/StyledInputText';
import StyledButton from './src/components/StyledButton';
import TextWhite from './src/components/TextWhite';
import i18n from './src/constants/i18n';

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
          <TextWhite children={i18n.t("title")} size={48} weight="bold"/>
        : printText !== 'nothing' ?
          <TextWhite children={`${i18n.t("titleWithToxicity")} ${i18n.t(`${printText}`)}`} size={48} weight="bold"/>
        :
          <TextWhite children={`${i18n.t("nonToxicity")}`} size={48} weight="bold"/>
        }
        {isLoading && <View style={styles.load}><ActivityIndicator size="large" color="#99272d" /></View>}
        <FlatList style={styles.list}/>
        <KeyboardAvoidingView enabled behavior="position">
          <StyledInputText placeholder="Digite aqui..." onChangeText={setText} value={text}/>
          <StyledButton disabled={text === "" ? true : false } children="Verificar" onPress={() => {classify(text, printText); setIsLoading(true)}}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
