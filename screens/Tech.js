import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Tech() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Tech</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    backgroundColor: '#CE7777',
    borderBottomWidth: 2,
    borderBottomColor: '#bdbdbd',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Roboto',
  },
});

export default Tech;
