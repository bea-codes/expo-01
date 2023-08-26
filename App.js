
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useReducer } from 'react';
import InputField from './components/InputField';
import NotesArea from './components/NotesArea';

function reducer(state, action){
  if(action.type == 'addedNote'){
    return({
      data: [...state.data, { id: state.id, note: state.note} ]
    })
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { data:[] });

  return (
    <View style={styles.container}>
      <View style={styles.titleAndInput}>
        <Text style={styles.awesomeTitle}>☆✨awesome notes✨☆</Text>
        <InputField/>
        <StatusBar style="auto" />
        <NotesArea/>
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
  }
});
