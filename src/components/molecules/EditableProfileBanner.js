import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {Banner} from '../atoms/Banner';
import {ProfileFrame} from '../primatives/ProfileFrame';

export class EditableProfileBanner extends Component {

    constructor(props)
    {
        super(props)
        this.state = {backImgUri: props.backImgUri, imgUri: props.imgUri, editMode: props.editMode, headerText: props.lineOneText, subheadingText: props.lineTwoText, footerText: props.lineThreeText}
    }

    handleEditBanner = (newSource) => {
        this.setState((prev) => ({
            backImgUri: newSource
        }))

    }

    handleEditAvatar = (newSource) => {
        this.setState((prev) => ({
            imgUri: newSource
        }))

    }

    handleToggleEditMode = () => {
        this.setState((prev) => ({
            editMode: !prev.editMode
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Banner color={styles.color} source={this.state.backImgUri}>
                    <ProfileFrame source={this.state.imgUri} avatarSize={'l'}/>
                </Banner>
                <TextInput editable={this.state.editMode} style={styles.headerText}>
                  {this.state.headerText}
                </TextInput>
                <Text style={styles.subheadingText}>
                  {this.state.subheadingText}
                </Text>
                <Text style={styles.footnoteText}>
                  {this.state.footerText}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        },
    headerText: {
        fontSize: 20,
        fontFamily: 'opensans-light',
        marginTop: 15
    },
    subheadingText: {
        fontSize: 16,
        fontFamily: 'opensans-light',
        marginTop: 0
    },
    footnoteText: {
        fontSize: 12,
        fontFamily: 'opensans-light',
        marginTop: 0
    }
});