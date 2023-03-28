import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Health() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Health</Text>
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
    backgroundColor: '#0c8079',
    borderBottomWidth: 2,
    borderBottomColor: '#bdbdbd',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Roboto',
  },
});

export default Health;
