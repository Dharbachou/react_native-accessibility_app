import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert} from 'react-native';

const FavoritesScreen = props => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

  return (
      <View>
          <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
          />
          <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
          />
          <Button title="Sign in" onPress={() => {
              Alert.alert(
                  'Success',
                  'welcome!!!',
                  [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: false},
              );
          }} />
      </View>
  );
};

export default FavoritesScreen;
