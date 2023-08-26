import { Text,View, FlatList, StyleSheet } from "react-native"
import CustomButton from "./CustomButton"

export default function NotesArea({ state, handleDispatchDelete }) {
	
	return(
		<View style={styles.container}>
			<FlatList 
			renderItem={
				({item})=> 
			<View style={styles.containerNote}>
				<Text>{item.note}</Text>
				<View style={styles.buttonContainer}>
					<CustomButton texto={'Excluir'} handleDispatch={handleDispatchDelete}/>
				</View>
			</View>
			}

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
		marginTop: 10
	},
	containerNote: {
		width: 375,
		height: 'auto',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: 5,
		marginBottom: 10,
		borderWidth: 1,
		backgroundColor: '#ffffff',
		borderWidth: 1
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row-reverse',
	}
})