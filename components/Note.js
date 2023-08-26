import { View, Pressable, StyleSheet, Text } from "react-native";
import CustomButton from "./CustomButton";

export default function Note({ note, id }) {
	return(
		<View style={styles.container}>
			<Text>{note}</Text>
			<View style={styles.buttonContainer}>
				<CustomButton texto={'Excluir'} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	
})