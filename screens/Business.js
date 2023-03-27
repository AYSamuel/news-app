import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Business() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Business</Text>
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
    backgroundColor: '#B99B6B',
  },
  text: {
    fontSize: 24,
  },
});

export default Business;
