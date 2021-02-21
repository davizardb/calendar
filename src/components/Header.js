import React from 'react';
import {StyleSheet, View, Image, Platform} from 'react-native';

import Chat from './Chat';

import profile from '../../assets/user.jpg';
import logo from '../../assets/grupo-73.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={profile} style={styles.avatar} />
        <Image source={logo} style={styles.logo} />
        <Chat />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 10,
    padding: 10,
    borderBottomWidth: 5,
    borderColor: 'rgba(170,170,170,0.1)',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 55,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  logo: {
    width: 110,
    height: 50,
    resizeMode: 'contain',
  },
});
