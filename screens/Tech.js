import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeBaseProvider, Divider } from 'native-base';

function Tech() {
  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Tech</Text>
        </View>
        <View>
          <View>
            <View style={styles.flex}>
              <Text style={[styles.title, styles.fontsize]}>Title</Text>
              <Text style={[styles.date, styles.fontsize]}>Date</Text>
            </View>
            <View style={styles.description}>
              <Text style={[styles.title, styles.fontsize]}>Description</Text>
            </View>
          </View>
          <Divider
            my={2}
            bg='#bdbdbd'
          />
          <View>
            <View style={styles.flex}>
              <Text style={[styles.title, styles.fontsize]}>Title</Text>
              <Text style={[styles.date, styles.fontsize]}>Date</Text>
            </View>
            <View style={styles.description}>
              <Text style={[styles.title, styles.fontsize]}>Description</Text>
            </View>
          </View>
          <Divider
            my={2}
            bg='#bdbdbd'
          />
          <View>
            <View style={styles.flex}>
              <Text style={[styles.title, styles.fontsize]}>Title</Text>
              <Text style={[styles.date, styles.fontsize]}>Date</Text>
            </View>
            <View style={styles.description}>
              <Text style={[styles.title, styles.fontsize]}>Description</Text>
            </View>
          </View>
          <Divider
            my={2}
            bg='#bdbdbd'
          />
        </View>
      </View>
    </NativeBaseProvider>
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
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  fontsize: {
    fontSize: 20,
  },
  description: {
    padding: 20,
  },
});

export default Tech;
