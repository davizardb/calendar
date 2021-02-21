import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import Header from './components/Header';
import Lifestyle from './components/Lifestyle';
import GradientButton from './components/GradientButton';
import CalendarModal from './components/CalendarModal';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={visible ? 'rgba(0,0,0,0.7)' : '#fff'}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header />
          <Lifestyle />
          <GradientButton
            title={'Pick a Date'}
            onClick={() => setVisible(true)}
          />
          <CalendarModal
            isVisible={visible}
            onClose={() => setVisible(false)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
