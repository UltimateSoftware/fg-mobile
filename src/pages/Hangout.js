import React, {Component} from 'react'
import {ScrollView, View, StyleSheet, ActivityIndicator, Text} from 'react-native'
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {GlobalContext} from '../services/GlobalProvider'

export class Hangout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: 'true',
            hangout: null
        }
    }

    async componentWillMount() {
        let hangout = await DataManager.getItemWithKey("hangout")
        console.log('HANGOUT ', hangout)
        this.setState({hangout, loading: 'false'})
    }

    render() {
        if(this.state.loading == 'true') {
            return <ActivityIndicator />
        }
        return (
            <GlobalContext.Consumer>
                {context => (
                //Wrap entire profile in a ScrollView
                <ScrollView style={styles.scrollViewStyle}  contentContainerStyle={styles.contentContainerStyle} bounces={false}>
                    <View style={styles.container}>
                        {/*Hangout title section with subheader of location - date*/}
                        <Text style={{marginTop: 20, textAlign: 'center', color: '#818282'}}>
                            <Text style={styles.hangoutTitle}>{this.state.hangout.title}</Text>{'\n'}
                            <Text style={styles.hangoutLocation}>{this.state.hangout.location} - {this.state.hangout.date}</Text>
                        </Text>

                    </View>
                </ScrollView>
            )}
            </GlobalContext.Consumer>
        )
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        opacity: 1,
        backgroundColor: 'white'
    },
    contentContainerStyle: {
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
        marginTop: SCREEN_HEIGHT*0.03,
        marginBottom: SCREEN_HEIGHT*0.03,
        alignItems: 'center',
    },
    subViewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    hangoutTitle: {
        fontFamily: 'montserrat-light',
        fontSize: 24
    },
    hangoutLocation: {
        fontFamily: 'open-sans-regular',
        fontSize: 16
    },
})