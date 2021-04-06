import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

//creating an inteface to props to auto document the new component
//the functions should be at the end of the interface
interface Props {
  title: string;
  position?: 'bottomRight' | 'bottomLeft';
  onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'bottomRight' }: Props) => {
  const android = () => {
    return (
      <View
        //adding a array of styles to change position of the touchable according to the prop position
        style={[
          styles.fabLocation,
          position === 'bottomLeft' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          //Ripple method only works on Android not on IOS
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <View
        //adding a array of styles to change position of the touchable according to the prop position
        style={[
          styles.fabLocation,
          position === 'bottomLeft' ? styles.left : styles.right,
        ]}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
