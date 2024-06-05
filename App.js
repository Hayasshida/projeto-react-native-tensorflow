import { KeyboardAvoidingView, SafeAreaView, View } from "react-native";
import { useState } from "react";
import { ActivityIndicator, Card, Text } from "react-native-paper";
import styles from "./src/constants/styles";
import toxicityTest from "./src/lib/toxicity";
import { StatusBar } from "expo-status-bar";
import ToxicityIndicator from "./src/components/ToxicityIndicator";
import StyledInputText from "./src/components/StyledInputText";
import StyledButton from "./src/components/StyledButton";
import { FlatList } from "react-native";
import TextWhite from "./src/components/TextWhite";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  console.log(history);

  const classify = async (text) => {
    const response = await toxicityTest(text);
    setIsLoading(false);
    console.log(response);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ToxicityIndicator />
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
                <TextWhite children={item} color="black" size={20} />
              </View>
            </Card.Content>
          </Card>
        )}
      />
      <KeyboardAvoidingView enabled behavior="position">
        <StyledInputText
          placeholder="Digite aqui..."
          onChangeText={setText}
          value={text}
        />
        <StyledButton
          children="Verificar"
          onPress={() => {
            setHistory([...history, text]); 
            setText("")
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
