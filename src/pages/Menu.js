import React from 'react';
import {ART, StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';
const {
    Surface,
    Group,
    Shape,
  } = ART;

export class Menu extends React.Component {
    render() {
        return (
            <View>
            <Surface width={500} height={500}>
              <Group x={100} y={0}>
                <Shape
                  d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                  stroke="#000"
                  strokeWidth={1} />
              </Group>
            </Surface>
          </View>
        )
    }
}