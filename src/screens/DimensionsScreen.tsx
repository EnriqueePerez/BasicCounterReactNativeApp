import React from 'react';
import { Text, useWindowDimensions, View, StyleSheet } from 'react-native';

export const DimensionsScreen = () => {
  //The hook useDimensions is changing its values on realtime, this means it will change when the orientation changes.
  const { width, height } = useWindowDimensions();

  //While using the component Dimensions, the value is going to be static and written once the component is mounted, this means it will not be updated if the orientation changes
  //const { width, height } = Dimensions.get('window')

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
