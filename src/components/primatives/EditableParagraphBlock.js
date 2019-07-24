import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export class EditableParagraphBlock extends Component{ 

    constructor(props)
    {
        super(props)
        this.state = {inspiration: this.props.inspiration, mar: this.props.mar, editable: false}
    }

    handleToggleEditMode = () => {
        this.setState((prev) => ({
            editable: !prev.editable
        }))
    }

    render()
    {
        return (
            <View style={styles.subViewStyle}>
                <TextInput
                    editable = {this.state.editable}
                    style={[styles.inspirationBlock, {marginTop: this.state.mar || 40 }]}
                    maxLength = {500}
                >
                    {this.state.inspiration}
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subViewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    inspirationBlock: {
        fontFamily: 'opensans-regular',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        margin: 20
    }
});