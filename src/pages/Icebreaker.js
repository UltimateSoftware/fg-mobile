import React, {Component} from 'react'
import {ScrollView, View, StyleSheet, ActivityIndicator, Text, FlatList, TouchableOpacity} from 'react-native'
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {GlobalContext} from '../services/GlobalProvider'
import {IcebreakerComponent} from '../components/IcebreakerComponent';
import {Banner} from "../components/Banner";

export class Icebreaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: 'true',
            icebreaker: null
        }
    }

    async componentWillMount() {
        let icebreaker = await DataManager.getItemWithKey("icebreaker")
        this.setState({icebreaker, loading: 'false'})
    }

    render() {
        if(this.state.loading === 'true') {
            return <ActivityIndicator />
        }
        return (
            <GlobalContext.Consumer>
                {context => (
                //Wrap entire profile in a ScrollView
                <ScrollView style={styles.scrollViewStyle} bounces={false}>
                    <View style={{width: SCREEN_WIDTH, alignItems: 'center'}}>  
                        <Banner text={this.state.icebreaker.name} color='#070745'/>
                    </View>
                    <View style={[styles.subViewStyle, {marginTop: 10}]}>
                    <Text>{this.state.icebreaker.description}</Text>
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
        marginRight: 'auto',
    },
    icebreakerContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
        marginTop: 0
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
        alignItems: 'center',
    },
    hangoutTitle: {
        fontFamily: 'montserrat-light',
        fontSize: 24
    },
    hangoutLocation: {
        fontFamily: 'open-sans-regular',
        fontSize: 12
    },
    hangoutDescription: {
        fontFamily: 'open-sans-regular',
        fontSize: 16
    },
    horizontalLine: {
        borderColor:'#818282',
        borderBottomWidth:1,
        flex: 1,
    },
    icebreaker: {
        alignItems: 'center',
        margin: 10
    },
    inspirationBox: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
})