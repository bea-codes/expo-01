import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { useReducer, useState } from "react";
import NotesArea from "./components/NotesArea";
import CustomButton from "./components/CustomButton";

function reducer(state, action) {
  switch (action.type) {
    case "addedNote":
      return {
        data: [...state.data, { note: action.note, id: action.id }].reverse(),
      };
    case "deletedNote":
      const id = action.id;
      return {
        ...state,
        data: state.data.filter(item => id != item.id),
      };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { data: [] });
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);

  const handleDispatchAdd = () => {
    if (input != "") {
      dispatch({ type: "addedNote", note: `${input.trim()}`, id: index });
    }
    setInput("");
    setIndex(index + 1);
  };


  return (
    <View style={styles.container}>
      <View style={styles.titleAndInput}>
        <Text style={styles.awesomeTitle}>☆✨awesome tasks✨☆</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Escreva aqui..."
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleDispatchAdd}
          />
          <CustomButton
            texto={"Adicionar"}
            handleDispatch={handleDispatchAdd}
          />
        </View>
        <View style={styles.containerNotesArea}>
          <FlatList
            renderItem={({ item }) => (
              <View style={styles.containerNote}>
                <Text>{item.note}</Text>
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={styles.botao}
                    onPress={() => {
                      dispatch({ type: "deletedNote", id: item.id });
                    }}
                  >
                    <Text>Excluir</Text>
                  </Pressable>
                </View>
              </View>
            )}
            data={state.data}
            keyExtractor={(item) => item.id}
          />
        </View>

        <StatusBar style="auto" />
      </View>
      <View style={styles.notesLenght}>
        <Text>{state.data.length} tarefas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
  awesomeTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  titleAndInput: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#ffffff",
  },
  notesLenght: {
    width: 450,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4682b4",
  },
  containerNotesArea: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  containerNote: {
    width: 375,
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  botao: {
    flex: 1,
    maxWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 2,
    marginLeft: 5,
    backgroundColor: "#87cefa",
  },
});
