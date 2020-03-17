import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';
import Data from '../data/Menu';

function Item({ title }) {
  return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
  );
}

const MenuScreen = props => {
  return (
      <SafeAreaView style={styles.container}>
        <SectionList
            sections={Data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#c2e9ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default MenuScreen;
