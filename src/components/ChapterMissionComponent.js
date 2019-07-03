import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {Inspiration} from './atoms/Inspiration';

export class ChapterMissionComponent extends Component {
    render() {
        const {
            body,
        } = this.props;

        return (
          <View style={styles.paragraphs}>
              <Inspiration title={"Our mission"} inspiration={body} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    paragraphs: {
        flex: 1,
        alignItems: "center",
    },
});