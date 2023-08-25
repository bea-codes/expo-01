import { View, FlatList, StyleSheet } from "react-native"
import Note from "./Note"

export default function NotesArea() {
	return(
		<View style={styles.container}>
			<FlatList 
			renderItem={({item})=> <Note note={item.note}/>}
			data={dataTest}
			keyExtractor={item => item.id}
			/>
			{/* <Note note={'teste'}></Note> */}
		</View>
	)
}
// renderItem={({item}) => <Item title={item.title} />}

const dataTest = [
	{
		id: 1,
		note:  'This is  hardcoded note '
	},
	{
		id: 2,
		note: 'Nota numero 2'
	},
	{
		id: 3,
		note: 'Nota numero 2'
	},
	{
		id: 4,
		note: 'Nota numero 2'
	},
	{
		id: 5,
		note: 'Nota numero 2'
	},
	{
		id: 6,
		note: 'Nota numero 2'
	},
	{
		id: 7,
		note: 'Terminar Atividade de Mobile'
	},
	{
		id: 8,
		note: 'Terminar Atividade de Mobile'
	},
	{
		id: 9,
		note: 'Terminar Atividade de Mobile'
	},
	{
		id: 10,
		note: 'Terminar Atividade de Mobile'
	},
	{
		id: 11,
		note: 'Terminar Atividade de Mobile'
	},
	{
		id: 12,
		note: 'Terminar Atividade de Mobile'
	}
]

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