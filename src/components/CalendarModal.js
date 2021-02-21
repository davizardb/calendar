import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );

import Modal from 'react-native-modal';
import Calendar from './Calendar';

export default function CalendarModal(props) {
  return (
    <Modal
      transparent={true}
      isVisible={props.isVisible}
      onRequestClose={props.onClose}
      animationType="slide"
      swipeDirection="down"
      backdropOpacity={0.7}
      coverScreen
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onSwipeComplete={props.onClose}
      style={styles.modal}>
      <TouchableWithoutFeedback onPress={props.onClose}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.customBorder} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={props.onClose}>
            <Icon name="close" size={30} color="#333" style={{padding: 10}} />
          </TouchableWithoutFeedback>
          <Text style={styles.title}>Calendar</Text>
        </View>
        <View />
        <Calendar />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1.5,
  },
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 3,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  title: {
    fontWeight: '700',
    color: '#333',
    fontSize: 15,
  },
  customBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    position: 'absolute',
    top: 85,
    alignSelf: 'center',
    width: Math.floor(deviceWidth) - 30,
    zIndex: 1,
  },
});
