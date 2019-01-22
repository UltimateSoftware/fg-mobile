import React from 'react';
import {ART, StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';
const {
    Surface,
    Group,
    Shape,
  } = ART;
import Morph from 'art/morph/path';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        Hello
      </View>
      // <View>
      //   // ...previous content omitted.
      //   <View key={'ticksX'}>
      //     {this.props.ticks.map((tick, index) => {
      //       const tickStyles = {};
      //       tickStyles.left = tick.x;

      //       return (
      //         <Text key={index} style={[styles.tickLabelX, tickStyles]}>
      //           {new Date(tick.datum.time * 1000)}
      //         </Text>
      //       );
      //     })}
      //   </View>

      //   <View key={'ticksY'}>
      //     {this.props.ticks.map((tick, index) => {
      //       const value = tick.datum.temperatureMax;

      //       const tickStyles = {};
      //       tickStyles.left = tick.x;
      //       tickStyles.top = tick.y;

      //       return (
      //         <View key={index} style={[styles.tickLabelY, tickStyles]}>
      //           <Text style={styles.tickLabelYText}>
      //             {value}&deg;
      //           </Text>
      //         </View>
      //       );
      //     })}
      //   </View>
      // </View>
    )
  }
}