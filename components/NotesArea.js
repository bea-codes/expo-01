import { View, FlatList, StyleSheet } from "react-native"
import Note from "./Note"




export default function NotesArea({ note, state }) {
	
	return(
		<View style={styles.container}>
			<FlatList 
			renderItem={({item})=> <Note note={item.note}/>}
			data={state}
			keyExtractor={item => item.id}
			/>
			{/* <Note note={'teste'}></Note> */}
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