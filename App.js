import { KeyboardAvoidingView, SafeAreaView, View, FlatList,} from "react-native";
import { useState } from "react";
import { ActivityIndicator, Text, Card } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import styles from "./src/constants/styles";
import toxicityTest from "./src/lib/toxicity";
import StyledInputText from "./src/components/StyledInputText";
import StyledButton from "./src/components/StyledButton";
import TextWhite from "./src/components/TextWhite";
import i18n from "./src/constants/i18n";
import { width } from "./src/constants/measures";
import { ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [printText, setPrintText] = useState("");

  TranslatorConfiguration.setConfig(ProviderTypes.Google, '','en');
  const translator = TranslatorFactory.createTranslator();

  const classify = async (text, printText) => {
    translator.translate(text).then(async(translated) => {
      text = translated;
      const response = await toxicityTest(text, printText)
      setPrintText(response.printText);
      setIsLoading(false);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {printText === "" ? (
        <TextWhite children={i18n.t("title")} size={48} weight="bold" width={width*0.9}/>
      ) : printText !== "nothing" ? (
        <TextWhite
          children={`${i18n.t("titleWithToxicity")} ${i18n.t(`${printText}`)}`}
          size={48}
          weight="bold"
          width={width*0.9}
        />
      ) : (
        <TextWhite
          children={`${i18n.t("nonToxicity")}`}
          size={48}
          weight="bold"
          width={width*0.9}
        />
      )}
      {isLoading && (
        <View style={styles.load}>
          <ActivityIndicator size="large" color="#99272d" />
        </View>
      )}
      <FlatList
        style={styles.list}
        data={history}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.item}>
                <TextWhite children={item} color="black" size={20}/>
              </View>
            </Card.Content>
          </Card>
        )}
      />
      <KeyboardAvoidingView enabled behavior="position">
        <View style={{ backgroundColor: "#1b1027" }}>
          <StyledInputText
            placeholder={i18n.t("placeholder")}
            onChangeText={setText}
            value={text}
          />
          <StyledButton
            disabled={text === "" ? true : false}
            children={i18n.t("button")}
            onPress={() => {
              classify(text, printText);
              setIsLoading(true);
              setHistory([...history, text]);
              setText("");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
