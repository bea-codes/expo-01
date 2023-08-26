import { View, FlatList, StyleSheet } from "react-native"
import Note from "./Note"




export default function NotesArea({ state, handleDispatchDelete }) {
	
	return(
		<View style={styles.container}>
			<FlatList 
			renderItem={({item})=> <Note note={item.note} handleDelete={handleDispatchDelete}/>}
			data={state.data}
			keyExtractor={item => item.id}
			/>
		</View>
	)
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		marginTop: 10,
		// borderWidth: 1,
		// borderColor: 'red'
	}
})