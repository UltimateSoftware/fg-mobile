import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export class EditableParagraphBlock extends Component{ 

    constructor(props)
    {
        super(props)
        this.state = {inspiration: this.props.inspiration, mar: this.props.mar, editable: false, viewStyle: styles.subViewStyle}
    }

    handleToggleEditMode = () => {
        this.setState((prev) => ({
            editable: !prev.editable
        }))
        if (this.state.viewStyle === styles.subViewStyle) {
            this.setState(() => ({
                viewStyle: styles.editSubViewStyle
            }))
        } else {
            this.setState(() => ({
                viewStyle: styles.subViewStyle
            }))
        }
    }

    render()
    {
        return (
            <View style={this.state.viewStyle}>
                <TextInput
                    editable = {this.state.editable}
                    style={styles.inspirationBlock}
                    maxLength = {500}
                    multiline = {true}
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
        alignItems: 'center',
        marginTop: 15
    },
    editSubViewStyle: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'pink',
        borderRadius: 25
    },
    inspirationBlock: {
        fontFamily: 'opensans-regular',
        fontSize: 14,
        textAlign: 'left',
        color: '#818282',
        marginTop: 5,
        marginHorizontal: 10,
        marginBottom: 20
        // marginHorizontal: 30
    }
});