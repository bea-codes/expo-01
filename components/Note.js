import { View, Pressable, StyleSheet, Text } from "react-native";
import CustomButton from "./CustomButton";

export default function Note({ note, id, handleDelete }) {
	return(
		<View style={styles.container}>
			<Text>{note}</Text>
			<View style={styles.buttonContainer}>
				<CustomButton texto={'Excluir'} handleDispatch={handleDelete}/>
			</View>
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
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