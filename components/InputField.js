import { View, TextInput, Pressable, StyleSheet, Text } from "react-native"
import CustomButton from "./CustomButton"
import { useState } from "react"

export default function InputField({dispatch}){
	const [input, setInput] = useState('');
	return(
	<View style={styles.inputContainer}>
		<TextInput
			placeholder='Escreva aqui...'
			style={styles.textInput}
			value={input}
			onChangeText={setInput}
			blurOnSubmit={true}
		/>
		<CustomButton texto={'Adicionar'}/>
	</View>
	) 
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row'
	},
	textInput: {
		flex: 3,
		borderWidth: 1,
		padding: 5,
		backgroundColor: '#ffffff'
	},
})