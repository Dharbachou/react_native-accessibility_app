/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './App/screens/HomeScreen';
import MealDetailScreen from './App/screens/MealDetailScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MealDetailScreen">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
