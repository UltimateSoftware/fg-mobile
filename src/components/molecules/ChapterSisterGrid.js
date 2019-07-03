import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Grid from 'react-native-grid-component';
import { ChapterSister } from '../atoms/ChapterSister';

export function ChapterSisterGrid({members}) {

    _renderMember = (member, i) => (
        <ChapterSister imgSrc={member.source} name={member.name} school={member.school}/>
    )
    _renderPlaceHolder = () => {
        <ChapterSister></ChapterSister>
    }

    return (
        <Grid style={styles.list} renderItem={this._renderMember} renderPlaceholder={this._renderPlaceHolder} keyExtractor={(item, index) => index.toString()} data={members} refreshing= {false} numColumns={4}/>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
});