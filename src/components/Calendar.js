import moment from 'moment';
import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text, Dimensions} from 'react-native';

import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/AntDesign';
import {LocaleConfig} from 'react-native-calendars';
import GradientButton from './GradientButton';

LocaleConfig.locales.en = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

LocaleConfig.defaultLocale = 'en';

const CalendarsScreen = (props) => {
  const [startDate, setStartDate] = useState({});
  const [endDate, setEndDate] = useState({});
  const [daysObject, setDaysObject] = useState({});
  const [toggle, setToggle] = useState(false);
  const [dates, setDates] = useState(moment(new Date()).format('MMMM'));

  const onDayPress = (day) => {
    if (startDate !== '' && startDate !== day.dateString) {
      setEndDate('');
    }
    setStartDate(day.dateString);
    setToggle(false);
  };

  const onDayLongPress = (day) => {
    if (endDate !== '' && endDate !== day.dateString) {
      setEndDate(day.dateString);
    }
    setEndDate(day.dateString);
  };

  const getDaysArray = (start, end) => {
    let dt = new Date(start);
    let endt = new Date(end);
    let arr = [];
    for (
      dt.setDate(dt.getDate() + 1);
      dt < endt;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    const splittedDaylist = arr.map((v) => {
      const splitted = v.toISOString().split('T');
      return splitted[0];
    });
    return splittedDaylist;
  };

  const styledDates = (start, end) => {
    const difArray = getDaysArray(start, end);
    let styledObject = {};
    [...difArray].forEach((day) => {
      styledObject = {
        ...styledObject,
        [day]: {
          color: '#15d4d8',
          textColor: 'white',
          text: {
            backgroundColor: 'red',
          },
        },
      };
    });
    const fullObject = {
      [start]: {
        startingDay: true,
        color: '#15d4d8',
        textColor: 'white',
      },
      [end]: {
        endingDay: true,
        color: '#15d4d8',
        textColor: 'black',
      },
    };
    let merged = {...fullObject, ...styledObject};
    setDaysObject(merged);
  };

  const onHandleEvent = () => {
    styledDates(startDate, endDate);
    setToggle(true);
  };

  const renderCalendar = () => {
    return (
      <Fragment>
        <Calendar
          current={moment(new Date()).format('YYYY-MM-DD')}
          style={styles.calendar}
          hideExtraDays
          onDayPress={onDayPress}
          onDayLongPress={onDayLongPress}
          markingType={'period'}
          markedDates={
            toggle
              ? daysObject
              : {
                  [startDate]: {
                    startingDay: true,
                    color: '#15d4d8',
                    textColor: 'white',
                  },
                  [endDate]: {
                    endingDay: true,
                    color: '#15d4d8',
                    textColor: 'black',
                  },
                }
          }
          theme={{
            textSectionTitleColor: '#777',
            textDayHeaderFontWeight: 'bold',
          }}
          onMonthChange={(month) => {
            setDates(moment(new Date(month.dateString)).format('MMMM'));
          }}
          renderArrow={(direction) => {
            return direction === 'left' ? (
              <View>
                <Icon name="arrowleft" size={25} color="#ddd" />
              </View>
            ) : (
              <Icon name="arrowright" size={25} color="#ddd" />
            );
          }}
          renderHeader={(date) => {
            return (
              <>
                <View style={styles.headerContainer}>
                  <View style={styles.currentDate}>
                    <Text style={styles.textDate}>
                      {moment(new Date()).format('dddd [-] MMM DD')}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.textMonth}>{dates}</Text>
                  </View>
                </View>
              </>
            );
          }}
        />
      </Fragment>
    );
  };

  return (
    <View>
      <ScrollView>{renderCalendar()}</ScrollView>
      <View style={styles.button}>
        <GradientButton title={'Apply'} onClick={() => onHandleEvent()} />
      </View>
    </View>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    marginTop: -40,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  currentDate: {
    marginTop: 25,
    padding: 10,
  },
  textDate: {
    color: '#777',
    letterSpacing: 3,
    marginTop: 5,
  },
  textMonth: {
    color: '#777',
    letterSpacing: 3,
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    width: '100%',
    top: 380,
  },
});
