import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DishScreen = ({ navigation: { navigate } }) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dish Screen</Text>
        <Button
            title="Go Home..."
            onPress={() => navigate('Home')}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DishScreen;
