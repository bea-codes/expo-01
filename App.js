import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import InputField from './components/InputField';
import NotesArea from './components/NotesArea';

export default function App() {
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
