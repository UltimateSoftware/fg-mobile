import React from 'react'
import {
    View, 
    Text, 
    TextInput,
    StyleSheet, 
    Image} from 'react-native'
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import {FgButton} from "../components/FgButton";

export class ChapterSelector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chapterCode: null,
        }
    }

    render() {
        return(
            <View style={styles.mainViewStyle}>
                <View style={[styles.subViewStyle, {paddingTop: 87}]}>
                    {/* FG Logo */}
                    <Image style={{width: SCREEN_WIDTH * 0.38, height: 35}} source={require('../../assets/images/fearlesslyGirl_logo.jpg')}/>

                    <Text style={{
                        fontFamily: 'montserrat-light',
                        fontSize: 22,
                        color: '#818282',
                        textAlign: 'center',
                        marginTop: 5
                    }}>Enter your Chapter code</Text>

                    {/* Chapter Code */}
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'Chapter Code'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        onChangeText={(text) => this.setState({chapterCode: text})}
                        value={this.state.chapterCode}/>

                    <View style={{width: SCREEN_WIDTH / 2, marginTop: 25, marginBottom: 15}}>
                        <FgButton onPress={() => this.handleChapterSelect()} title={"Select Chapter"}/>
                    </View>

                    <Text style={{
                        paddingTop: 25
                    }}>Don't have a chapter code?</Text>

                    <View style={{width: SCREEN_WIDTH / 2, marginTop: 10, marginBottom: 15}}>
                        <FgButton onPress={() => this.handleCreateChapter()} title={"Create a Chapter"}/>
                    </View>
                </View>
            </View>
        );
    }

    async handleChapterSelect() {
        const { navigation } = this.props;
        navigation.navigate("SignedIn")
    }

    async handleCreateChapter() {
        const {navigation} = this.props;
        navigation.navigate("CreateChapter")
    }
}

const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        opacity: 1,
        backgroundColor: 'white'
    },
    subViewStyle: {
        flex: 1,
        alignItems: 'center',
        margin: 5
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
    submitButtonStyle: {
        width: '50%',
        marginTop: 20,
        marginBottom: 40
    }
});