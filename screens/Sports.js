import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Sports() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Sports</Text>
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
    backgroundColor: '#3C2317',
    borderBottomWidth: 2,
    borderBottomColor: '#bdbdbd',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Roboto',
  },
});

export default Sports;
