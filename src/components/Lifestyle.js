import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import background from '../../assets/ilustration_lifestyle.png';

export default function Lifestyle() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={background}>
        <View style={styles.rowContainer}>
          <View style={{flex: 2}}>
            <Text style={styles.title}>Lifestyle</Text>
            <Text style={styles.text}>
              Get a holistic view of your activities to enhance your wellbeing
              and benefit from even more accurate recommendations.
            </Text>
          </View>
          <View style={{flex: 2}} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 15,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'left',
    color: '#fff',
    borderRadius: 15,
    lineHeight: 22,
  },
});
