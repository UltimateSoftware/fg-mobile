import React from 'react';
import Expo from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, FlatList, Image, ListView, TouchableOpacity, Animated, SafeAreaView} from 'react-native';
import { Tile } from 'react-native-elements';
import { Header, Left, Button, Body, Right, Title, Card, H2, CardItem, Thumbnail} from 'native-base';

import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Banner} from "../components/Banner";
import {HangoutService} from '../services/HangoutService';
import { black } from 'ansi-colors';

import {HangoutComponent } from '../components/HangoutComponent'
import Icon from 'react-native-vector-icons/AntDesign';

//TODO: Create AvatarGroup component to display chapter sisters.
//TODO: Create FgButton to allow 'View All' click to see all chapter sisters.
//TODO: Add ChapterSisters section below Inspiration Block
//TODO: Status bar background should be white not translucent
export class HangoutLanding extends React.Component {
    constructor() {
        super();
        this.state = {
            hangouts: [],
            bounceValue: new Animated.Value(-60),
            isHidden: true
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
            <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.contentContainerStyle} bounces={false}>
                <View style={styles.container}>
                {this.state.hangouts.map((r, i) =>
                            <HangoutComponent key={i} title={r.title} index={i}></HangoutComponent>
                )}
                </View>
            </ScrollView>
        );
    }
 toggleHidden(){
  var toValue = 0;
  this.state.bounceValue.setValue(-60);

    this.setState({
      isHidden: !this.state.isHidden
    })

    if (this.state.isHidden){
      toValue = 0
    }

    Animated.spring(this.state.bounceValue,
    {
      toValue: toValue,
      velocity: 2,
      tension: 0,
      friction: 8,
    }).start();
    this.setState({
      isHidden: !this.state.isHidden
    })

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
                    <Button onPress={()=>this.toggleHidden()} transparent style={{paddingRight: 30}}>
                        <Image style={{width: 38, height: 38}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                    </Button>

                </Right>
            </Header>

            <Banner text='Hangouts' color='#070745'/>
              {!this.state.isHidden &&
            <Animated.View style = {[styles.spotifyHeader, {transform: [{translateY: this.state.bounceValue}]}]}>
              <StatusBar hidden />
                <TouchableOpacity style = {{width: 40, height:17,top:8,right:30,position:'absolute'}}>
                    <Text style = {{fontSize: 12,fontFamily: 'open-sans-regular', color: '#00D264'}}>GO TO</Text>
                </TouchableOpacity>

                <View style = {{width: 414,backgroundColor: '#5F5F5F',top:32,position: 'absolute',height:1}}>
                </View>

                <Button style={{width: 22, height: 22, borderRadius: 11,position: 'absolute',top:5, right:3}}>
                    <Image style = {{width: 22, height: 22, borderRadius:11}} source={{uri:'https://banner2.kisspng.com/20180418/jjq/kisspng-spotify-computer-icons-paypal-5ad6d7b8ef88e3.0461224615240293689811.jpg'}}/>
                </Button>

                <Button style = {styles.spotifyButton} onPress={()=>this.toggleHidden()}>
                    <View style = {{height:16, width:2, backgroundColor:'#C3C3C3',position:'absolute', right: 15, transform: [{rotate: '225deg'}]}}></View>
                    <View style = {{height:2, width:16, backgroundColor:'#C3C3C3',position:'absolute', right: 8, transform: [{rotate: '225deg'}]}}></View>
                </Button>

                <Button style = {{height:16, width: 16, backgroundColor: '#5F5F5F', borderRadius: 8, top: 8, left:8,position:'absolute'}}>
                  <Icon style = {{top:4, position: 'absolute', left:2}} name = 'down' color = "#9A9A9A"/>
                </Button>

                <Image style = {{height: 60, width: 60, left: 8, top:40, position: 'absolute'}} source = {{uri:'https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/tile/image/original_1.jpg'}}></Image>
                <Text style = {{fontFamily: 'open-sans-bold',color: '#9A9A9A',fontSize: 12, height:17, width:160,left:31, top:8, position: 'absolute'}}>Fun. Fun. by fearlesslyGirl</Text>
                <Text style = {{fontFamily: 'open-sans-bold',color: '#F1F1F1',fontSize: 14, height:19, width:160,left:77, top:52, position: 'absolute'}}>Come Together</Text>
                <Text style = {{fontFamily: 'open-sans-regular',color: '#F1F1F1',fontSize: 12, height:17, width:160,left:77, top:71, position: 'absolute'}}>The Beatles</Text>

                <Button style = {{width:24,height:24,left: 24, top:116,backgroundColor: '#282828', position: 'absolute'}}>
                    <Icon style = {{width:24,height:24, fontSize:24}} name = 'pluscircleo' color = "#F1F1F1"  />
                </Button>

                <Button style = {{width:32,height:32,left: 192, top:112,backgroundColor: '#282828', position: 'absolute'}}>
                  <Icon style = {{width:32,height:32,fontSize:32}} name = 'rightcircleo' color = "#F1F1F1"  />
                </Button>

                <Button style = {{width:18,height:18,left: 240, top:120, position: 'absolute',backgroundColor: '#282828'}}>
                  <Icon style = {{width:18,height:18, fontSize:18}} name = 'stepforward' color = "#F1F1F1"  />
                </Button>

                <Button style = {{width:18,height:18,left: 160, top:120,backgroundColor: '#282828', position: 'absolute'}}>
                  <Icon style = {{width:18,height:18, fontSize:18}} name = 'stepbackward' color = "#F1F1F1"  />
                </Button>

                <Button style = {{width: 20, height:20,right:8, top:40,position:'absolute',backgroundColor: '#282828'}}>
                  <Icon style = {{width: 20, height:20, fontSize:20}} name = 'setting' color = "#9A9A9A" />
                </Button>

            </Animated.View>
          }
                {<this.ListOfHangouts></this.ListOfHangouts>}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        width: '100%',
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
    item: {
        padding: 10,
        height: 44,
        width: SCREEN_WIDTH*.40
    },
    spotifyHeader: {
      position: 'absolute',
      height: 158,
      width: SCREEN_WIDTH,
      alignContent: 'center',
      justifyContent: 'center',
      top: 0,
      backgroundColor: '#282828'


    },
    spotifyButton: {
      position: 'absolute',
      width: 32,
      height: 32,
      right: 14,
      top: 142,
      borderRadius: 32/2,
      backgroundColor: '#F4F4F4'
    }
});
