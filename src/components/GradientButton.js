import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function GradientButton(props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={props.onClick}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4a54df', '#15d4d8']}
          style={styles.gradient}
          useAngle={true}
          angle={43}
          angleCenter={{x: 0.04, y: 0}}>
          <Text style={styles.text}>{props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 50,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
