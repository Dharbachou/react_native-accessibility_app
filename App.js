import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from './App/screens/HomeScreen';
import DishScreen from './App/screens/DishScreen';
import MenuScreen from './App/screens/MenuScreen';
import FavoritesScreen from "./App/screens/FavoritesScreen";

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Menu" component={MenuScreen} />
				<Drawer.Screen name="Dish" component={DishScreen} />
				<Drawer.Screen name="Favorites" component={FavoritesScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
