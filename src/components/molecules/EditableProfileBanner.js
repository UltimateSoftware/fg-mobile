import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import {Banner} from '../atoms/Banner';
import {ProfileFrame} from '../primatives/ProfileFrame';
import {EditableProfileFrame} from '../primatives/EditableProfileFrame';

export class EditableProfileBanner extends Component {

    constructor(props)
    {
        super(props)
        this.state = {backImgUri: props.backImgUri, imgUri: props.imgUri, editMode: props.editMode, headerText: props.lineOneText, subheadingText: props.lineTwoText, footerText: props.lineThreeText,
        viewStyle: null}
        this.editableProfileFrame = React.createRef();
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

        this.editableProfileFrame.current.handleToggleEditMode()

        if (this.state.viewStyle === null) {
            this.setState(() => ({
                viewStyle: styles.editSubViewStyle
            }))
        } else {
            this.setState(() => ({
                viewStyle: null
            }))
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Banner color={styles.color} source={this.state.backImgUri}/>
                <EditableProfileFrame ref={this.editableProfileFrame} style={styles.frame} source={this.state.imgUri} editable={this.state.editMode} avatarSize={'l'}/>
                <View style={[this.state.viewStyle, {marginTop: 15}]}>
                    <TextInput editable={this.state.editMode} style={styles.headerText}>
                    {this.state.headerText}
                    </TextInput>
                </View>
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
        marginTop: 0
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
    },
    editSubViewStyle: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#fd17b5',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    frame: {
        marginTop: -64
    }
});