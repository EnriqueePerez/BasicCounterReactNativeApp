/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View style={styles.incrementButton}>
          <Text>Click me!!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  incrementButton: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});
