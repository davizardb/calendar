import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import chatIcon from '../../assets/chat_icon.png';

export default (_) => (
  <View>
    <View style={styles.redBall} />
    <Image source={chatIcon} style={styles.chat} />
  </View>
);

const styles = StyleSheet.create({
  chat: {
    width: 40,
    height: 40,
    marginTop: 7,
    marginRight: 12,
  },
  redBall: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: '#d33f4c',
    position: 'absolute',
    marginLeft: 27,
    marginTop: 2,
    zIndex: 1,
  },
});
