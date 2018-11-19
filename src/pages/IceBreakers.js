import React from 'react';
import Expo from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {StyleSheet, View, Text, ScrollView, StatusBar, StatusBarIOS, FlatList, Image, ListView, TouchableOpacity} from 'react-native';
import { Header, Left, Button, Body, Right, Title, Card, H2, CardItem} from 'native-base';

import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../utils/sharedConstants";
import {Banner} from "../components/Banner";
import {HangoutLanding} from "../pages/HangoutLanding";

export class IceBreakers extends React.Component {
    render() {
        return (
            <HangoutLanding>
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
            </HangoutLanding>
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
        flex: 1,
        alignItems: 'center',
        position: 'relative'
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
});
