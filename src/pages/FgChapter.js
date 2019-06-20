import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, FlatList} from 'react-native';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {Inspiration} from '../components/atoms/Inspiration';
import {Banner} from '../components/atoms/Banner';
import {ProfileFrame} from '../components/primatives/ProfileFrame';
import useChapter from '../domain/models/Chapter';
import {ProfileBanner} from '../components/molecules/ProfileBanner';
import {ParagraphBlock} from '../components/primatives/ParagraphBlock';

function oneOff(){

}

function FgChapter() {

    const [chapter, chapterActions] = useChapter()
    // See Chapter definition in domain/models/Chapter
    // any new information which the backend provides needs to be reflected in domain/models/Chapter
    const {Chapter, Status} = chapter; // Use Chapter to object to populate page
    
    // const imgUri = 'fearlesslyGirl_logo.jpg';
    const imgUri = <ProfileBanner />;

    const fillerBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    
    const bylaws = [
        {id: 0, header: "I. Lorem Ipsum", body: fillerBody},
        {id: 1, header: "II. Lorem Ipsum", body: fillerBody},
        {id: 2, header: "III. Lorem Ipsum", body: fillerBody},
        {id: 3, header: "IV. Lorem Ipsum", body: fillerBody},
        {id: 4, header: "V. Lorem Ipsum", body: fillerBody},
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* REPLACE WITH ProfileBanner COMPONENT in components/molecules/ProfileBanner */}
                <Banner color={"#6ED4C8"} source={imgUri}> 
                    <ProfileFrame source={imgUri} size={'l'}/>
                </Banner>
                <Inspiration title={"Chapter name"} inspiration={"Chapter number"}/>

                <View style={styles.paragraphs}>
                    <View style={[styles.inspirationTitle, {marginTop: 20}]}>
                        <View style={styles.inspirationLine}/>
                            <Text style={styles.inspirationLabel}>  Our history  </Text>
                        <View style={styles.inspirationLine}/>
                    </View>
                    <ParagraphBlock inspiration={fillerBody} />
                </View>

                <View style={styles.paragraphs}>
                    <View style={[styles.inspirationTitle, {marginTop: 20}]}>
                        <View style={styles.inspirationLine}/>
                            <Text style={styles.inspirationLabel}>  Student leadership  </Text>
                        <View style={styles.inspirationLine}/>
                    </View>
                    <View>
                    <ParagraphBlock inspiration={fillerBody} />
                    </View>
                </View>

                <View style={styles.paragraphs}>
                    <View style={[styles.inspirationTitle, {marginTop: 20}]}>
                        <View style={styles.inspirationLine}/>
                            <Text style={styles.inspirationLabel}>  Our mission  </Text>
                        <View style={styles.inspirationLine}/>
                    </View>
                    <ParagraphBlock inspiration={fillerBody} />
                </View>

                <View style={styles.paragraphs}>
                    <View style={[styles.inspirationTitle, {marginTop: 20}]}>
                        <View style={styles.inspirationLine}/>
                            <Text style={styles.inspirationLabel}>  FearlesslyGirl bylaws  </Text>
                        <View style={styles.inspirationLine}/>
                    </View>
                    <FlatList
                        data={bylaws}
                        scrollEnabled={false}
                        renderItem={({item}) => 
                        <React.Fragment>
                            <Text style={styles.textList}>{item.header}</Text>
                            <ParagraphBlock inspiration={item.body} />
                        </React.Fragment>
                    }/>
                </View>

                <View style={styles.paragraphs}>
                    <View style={[styles.inspirationTitle, {marginTop: 20}]}>
                        <View style={styles.inspirationLine}/>
                            <Text style={styles.inspirationLabel}>  Chapter bylaws  </Text>
                        <View style={styles.inspirationLine}/>
                    </View>
                    <FlatList
                        data={bylaws}
                        scrollEnabled={false}
                        renderItem={({item}) => 
                        <React.Fragment>
                            <Text style={styles.textList}>{item.header}</Text>
                            <ParagraphBlock inspiration={item.body} />
                        </React.Fragment>
                    }/>
                </View>
            </View>
        </ScrollView>
    );
}

FgChapter.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default FgChapter

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
    inspirationTitle: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    inspirationLabel: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#818282'
    },
    inspirationLine: {
        position: 'relative',
        borderBottomColor:'#818282',
        borderBottomWidth:1,
        height:'60%',
        width:'32%'
    },
    paragraphs: {
        flex: 1,
        alignItems: "center",
    },
    textList: {
        alignItems: "center",
        fontWeight: "bold",
        color: 'gray',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 40,
        marginBottom: -30,
    }
});

