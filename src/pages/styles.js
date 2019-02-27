import {StyleSheet} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";

export var styles = StyleSheet.create({
  scrollViewStyle: {
      opacity: 1,
      flex: 1,
      paddingBottom: 5
  },
  container: {
      flex: 1,
      alignItems: 'center',
      position: 'relative'
  },
  textContainer: {
      position: 'absolute',
      color: '#818282',
      textAlign: 'center'
  },
  inspirationTitle: {
      position: 'absolute',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center'
  },
  item: {
      padding: 10,
      height: 44,
      width: SCREEN_WIDTH*.40
  },
});