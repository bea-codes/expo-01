
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useReducer, useState } from 'react';
import InputField from './components/InputField';
import NotesArea from './components/NotesArea';
import CustomButton from './components/CustomButton';

function reducer(state, action){
  if(action.type == 'addedNote'){
    return({
      data: [...state.data, { note: action.note } ].reverse()
    })
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { data:[], id: 0 });
  const [input, setInput] = useState('');
  let notesLenght = state.data.length;

  const handleDispatchAdd = () => {
		dispatch({type: 'addedNote', note: `${input}`});
    setInput('');
	}

  const handleDispatchDelete = () => {
    dispatch({type: 'deleteNote'})
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleAndInput}>
        <Text style={styles.awesomeTitle}>☆✨awesome notes✨☆</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Escreva aqui...'
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleDispatchAdd}
          />
          <CustomButton texto={'Adicionar'} handleDispatch={handleDispatchAdd}/>
	      </View>

        <NotesArea state={state} handleDispatchDelete={handleDispatchDelete}/>
        <StatusBar style="auto" />
        <View style={styles.notesLenght}>
          <Text>{notesLenght} tarefas</Text></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  awesomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  titleAndInput: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15
  },
  inputContainer: {
		flexDirection: 'row'
	},
	textInput: {
		flex: 3,
		borderWidth: 1,
		padding: 5,
		backgroundColor: '#ffffff'
	},
  notesLenght:{
    width: 450,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4682b4'
  }
});
