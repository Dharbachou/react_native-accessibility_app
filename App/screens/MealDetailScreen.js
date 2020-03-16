import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = ({ navigation }) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            title="Go to Home..."
            onPress={() => navigation.push('Home')}
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

export default MealDetailScreen;
