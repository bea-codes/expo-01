import { Pressable, Text, StyleSheet } from "react-native";

export default function CustomButton({ texto }) {
	return(
		<Pressable style={styles.botao}>
			<Text>{texto}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	botao: {
		flex: 1,
		maxWidth: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		padding: 2,
		marginLeft: 5,
		backgroundColor: '#87cefa'
	}
})