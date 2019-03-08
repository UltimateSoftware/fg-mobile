import React from 'react';
import Expo from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, FlatList, Image, ListView, TouchableOpacity} from 'react-native';
import { Tile } from 'react-native-elements';
import { Header, Left, Button, Body, Right, Title, Card, H2, CardItem, Thumbnail} from 'native-base';

import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Banner} from "../components/Banner";
import {HangoutService} from '../services/HangoutService';
import { black } from 'ansi-colors';

import {HangoutComponent } from '../components/HangoutComponent'

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent
export class HangoutLanding extends React.Component {
    constructor() {
        super();
        this.state = {
            hangouts: [],
        }
        this.HangoutService = new HangoutService();
    }

    componentDidMount() {
        this.HangoutService.getHangouts().then((data) => {
            this.setState({hangouts: data});
        });
    }

    getImage(icon) {
        
    }
    
     IceBreakers= () =>{
        return (
            <ScrollView
                    style={[styles.scrollViewStyle]}
                    bounces={false}
                    flexDirection='row'
                >
     
                <View style={styles.container}>
                <FlatList
                numColumns={2}
                bounces={false}
                style={{alignContent:'center', }}
                data={[
                    {key: 'Devin', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                    {key: 'Jackson', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                    {key: 'James', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                    {key: 'Joel', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                    {key: 'John', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                    {key: 'Jillian', img: 'https://icon2.kisspng.com/20180320/sdq/kisspng-computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-5ab0ba010aeb80.8431035315215313930447.jpg'},
                ]}
                renderItem={({item}) => <TouchableOpacity style={[styles.item,{borderRadius:10, padding:40, shadowRadius: 5, }]}>
                <Card rounded style={{flex: 1, shadowOpacity: 10, margin: 10, borderRadius: 10, alignItems: 'center' }}>
                        <Image source={{uri:item.img}} style={{width:35, height: 35}}/>
                    <CardItem footer bordered>
                        <Text style={[{height:18}]}>{item.key}</Text>
                    </CardItem>
                </Card></TouchableOpacity>}
                />
    
                </View>
                </ScrollView>
            
        );
    }

    ListOfHangouts = () => {return (
            <ScrollView style={styles.scrollViewStyle} bounces={false}>
                <View style={styles.container}>
                {this.state.hangouts.map((r, i) => 
                            <HangoutComponent key={i} title={r.title} index={i}></HangoutComponent>
                )}
                </View>
            </ScrollView>
        );
    }

    render() {
        const bannerHeight = SCREEN_WIDTH * BANNER_HEIGHT_WIDTH_RATIO;
        return (
            <View style={{height: SCREEN_HEIGHT*.93, width: SCREEN_WIDTH, alignItems: 'center'}}>
            <Header style={{width:SCREEN_WIDTH, height: SCREEN_HEIGHT*.125}}> 
                <Left>
                    <Button transparent>
                        <H2 style={{fontFamily: 'montserrat-bold', color: '#818282', paddingLeft: 20}}>Hangouts</H2>
                    </Button>
                </Left>
                <Right style={{alignItems:'center'}}>
                    <Button transparent style={{paddingRight: 30}}>
                        <Image style={{width: 38, height: 38}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                    </Button>
                </Right>
            </Header>
            <Banner text='Hangouts' color='#070745'/>
                {<this.ListOfHangouts></this.ListOfHangouts>}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        opacity: 1,
        flex: 1,
        paddingBottom: 5
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH*.975,
        justifyContent: 'center',
        marginTop: SCREEN_HEIGHT*0.03,
    },
    textContainer: {
        position: 'absolute',
        color: '#818282',
        textAlign: 'center'
    },
    inspirationTitle: {
        position: 'absolute',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
});