import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {Inspiration} from './atoms/Inspiration';
import {BylawList} from './molecules/BylawList';

export class ChapterFGBylawsComponent extends Component {
    render() {
        const {
            bylaws,
        } = this.props;

        return (
            <View style={styles.paragraphs}>
                <Inspiration title={"FearlesslyGirl bylaws"} />
                <BylawList bylaws={bylaws} />
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