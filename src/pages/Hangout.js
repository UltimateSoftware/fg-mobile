import React, {Component} from 'react'
import {ScrollView, View, StyleSheet, ActivityIndicator, Text, FlatList, TouchableOpacity} from 'react-native'
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {GlobalContext} from '../services/GlobalProvider'
import {IcebreakerComponent} from '../components/IcebreakerComponent';
import {Banner} from "../components/Banner";

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
        console.log("HANGOUT CONTENT ", hangout.content.hangoutActivity)
        this.setState({hangout, loading: 'false'})
    }

    _renderHangoutDiscussion = ({item: discussion}) => {
        return (
            <Text style={styles.hangoutDescription}>{discussion}</Text>
        )
    }

    _goToIcebreaker = async (icebreaker) => {
        await DataManager.setItemForKey("icebreaker", icebreaker)
        this.props.navigation.navigate("Icebreaker")
    }

    _keyExtractor = (item, index) => index.toString()

    ListOfIcebreakers = () => {return (
        <ScrollView style={styles.scrollViewStyle} bounces={false}>
                <View style={styles.icebreakerContainer}>
                {this.state.hangout.icebreakers.map((icebreaker, index) => 
                        <TouchableOpacity key={index} onPress={() => this._goToIcebreaker(icebreaker)}>
                            <IcebreakerComponent key={index} index={index} icebreaker={icebreaker}></IcebreakerComponent>
                        </TouchableOpacity>
                )}
                </View>
        </ScrollView>
        );
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
                        <Banner text={this.state.hangout.title} color='#070745' />
                        {/*Hangout title section with subheader of location - date*/}
                        <View style={[styles.subViewStyle, {marginTop:20}]}>
                            <Text style={{textAlign:'center'}}>
                                <Text style={styles.hangoutLocation}>Location: {this.state.hangout.location}</Text>{'\n'}
                                <Text style={styles.hangoutLocation}>Date: {this.state.hangout.date}</Text>{'\n'}
                            </Text>

                            <Text style={styles.hangoutDescription}>{this.state.hangout.content.description}</Text>
                            <View style={[styles.subViewStyle, {marginTop: 20}]}>{<this.ListOfIcebreakers></this.ListOfIcebreakers>}</View>
                        </View>

                        <View style={[styles.inspirationBox, {marginTop: 20}]}>
                            <View style={styles.horizontalLine}/>
                            <Text style={[styles.hangoutDescription, {marginBottom: -10}]}>  Discussions  </Text>
                            <View style={styles.horizontalLine}/>
                        </View>

                        <FlatList
                            style={styles.discussionList}
                            data={this.state.hangout.content.discussions}
                            renderItem={this._renderHangoutDiscussion}
                            keyExtractor={this._keyExtractor}
                        />

                        <View style={[styles.inspirationBox, {marginTop: 20}]}>
                            <View style={styles.horizontalLine}/>
                            <Text style={[styles.hangoutDescription, {marginBottom: -10}]}>  Activity  </Text>
                            <View style={styles.horizontalLine}/>
                        </View>

                        <View style={[styles.subViewStyle, {marginTop: 20}]}>
                            <Text style={styles.hangoutDescription}>Activity: {this.state.hangout.content.hangoutActivity.bonusActivity}</Text>
                            <Text style={styles.hangoutDescription}>Content: {this.state.hangout.content.hangoutActivity.content}</Text>
                            <Text style={styles.hangoutDescription}>Trip: {this.state.hangout.content.hangoutActivity.trip}</Text>
                        </View>
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
        fontSize: 13
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
    discussionList: {
        marginTop: 20
    }
})