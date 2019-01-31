import React from 'react'
import {StyleSheet, View, Text, Image, TextInput, Picker, Button} from 'react-native';
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import {FgButton} from "../components/FgButton";
import {CHAPTER, DataManager} from '../DataManager'
import {ChapterService} from '../services/ChapterService'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export class CreateChapter extends React.Component {
    service = new ChapterService()

    constructor(props) {
        super(props)

        this.state = {
            chapterName: null,
            chapterSubtext: null,
            description: null,
            mission: null
        }
    }

    render() {
        return(
            <KeyboardAwareScrollView
                style={styles.scrollViewStyle}
                resetScrollToCoords={{x: 0, y: 0}}
                scrollEnabled={true}
                bounces={false}>

                // FearlesslyGirl Logo
                <View style={[styles.subViewStyle, {paddingTop: 87}]}>
                    <Image style={{width: SCREEN_WIDTH * 0.38, height: 35}} source={require('../../assets/images/fearlesslyGirl_logo.jpg')}/>
                </View>

                // Page title
                <View style={styles.subViewStyle}>
                    <Text style={{
                        fontFamily: 'montserrat-light',
                        fontSize: 22,
                        color: '#818282',
                        textAlign: 'center'
                    }}>Create a Chapter</Text>
                </View>

                // Chapter Name input
                <View style={[styles.subViewStyle, {marginTop: 25}]}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'Chapter Name'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        onChangeText={(text) => this.setState({chapterName: text})}
                        value={this.state.chapterName}/>

                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'Chapter Subtext'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        onChangeText={(text) => this.setState({chapterSubtext: text})}
                        value={this.state.chapterSubtext}/>
                </View>
{/* 
                // Chapter Description text input
                <View style={[styles.subViewStyle, {marginTop: 5}]}>
                    <Text style={styles.inputLabelStyle}>Chapter Description</Text>
                    <TextInput style={[styles.textInputStyle, styles.inspirationInputStyle]}
                               multiline={true}
                               onChangeText={(text) => this.setState({description: text})}
                               value={this.state.description}/>
                </View> */}

                // Chapter Mission text input
                <View style={[styles.subViewStyle, {marginTop: 15}]}>
                    <Text style={styles.inputLabelStyle}>Chapter Mission</Text>
                    <TextInput style={[styles.textInputStyle, styles.inspirationInputStyle]}
                               multiline={true}
                               onChangeText={(text) => this.setState({mission: text})}
                               value={this.state.mission}/>
                </View>

                // Submit button
                <View style={styles.subViewStyle}>
                    <Text style={{
                        textAlign: 'center'
                    }}
                    >Go to your chapter profile once created to add a profile picture, banner, bylaws, and more!</Text>
                    <View style={styles.submitButtonStyle}>
                        <FgButton onPress={() => this.handleChapterCreate()} title={"Create Chapter"}/>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        );
    }

    async handleChapterCreate() {
        var chapter = await this.service.createChapter(this.state)
        DataManager.setItemForKey(CHAPTER, chapter);
        const { navigate } = this.props.navigation;
        navigate("SignedIn")
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        opacity: 1,
        backgroundColor: 'white'
    },
    subViewStyle: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        marginBottom: 0
    },
    textInputStyle: {
        fontFamily: 'open-sans-regular',
        fontSize: 18,
        borderColor: '#BDCDD1',
        borderBottomWidth: 1,
        width: SCREEN_WIDTH * 0.78,
        height: 35,
        lineHeight: 20,
        margin: 20
    },
    inspirationInputStyle: {
        height: 140,
        borderWidth: 1,
        textAlign: 'left'
    },
    inputLabelStyle: {
        fontFamily: 'open-sans-regular',
        fontSize: 18,
        color: '#3A6A75',
        textAlign: 'left',
        width: SCREEN_WIDTH * 0.78
    },
    pickerStyle: {
        width: SCREEN_WIDTH * 0.78,
        padding: 15,
        borderWidth: 0,
        borderColor: '#BDCDD1'
    },
    pickerItemStyle: {
        fontSize: 26
    },
    submitButtonStyle: {
        width: '50%',
        marginTop: 20,
        marginBottom: 20
    }
});