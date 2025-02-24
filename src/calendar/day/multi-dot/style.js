import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';
import { white } from 'ansi-colors';

const STYLESHEET_ID = 'stylesheet.day.multiDot';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 32,
      height: 32,
      alignItems: 'center',
      borderRadius: 16
    },
    text: {
      marginTop: 4,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      // backgroundColor: appStyle.selectedDayBackgroundColor,
      borderColor: appStyle.selectedDayBackgroundColor,
      borderWidth: 2,
      borderRadius: 16
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      // color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dotsContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      marginTop: 2,
      borderRadius: 5,
      paddingTop: 1,
      paddingRight: 2,
      paddingBottom: 1,
      paddingLeft: 2
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      marginLeft: 1,
      marginRight: 1,
      borderRadius: 2,
      opacity: 0
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
