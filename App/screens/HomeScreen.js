import React from 'react';
import {View, Button, Image, StyleSheet} from "react-native";

const imagePath = "https://www.menu.by/resources/default/css/images/111222.jpg?v=11";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Image
				style={styles.image}
				source={{ uri: imagePath }}/>
			<Button
				style={styles.button}
				title="Go to menu"
				onPress={() => navigation.navigate('Menu')}
			/>
		</View>
	);
};


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		flex: 1,
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center'
	}
});

export default HomeScreen;