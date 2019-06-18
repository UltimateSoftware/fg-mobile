
import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../../SharedConstants";


export function CalendarItem({text}) {
    return (
        <View>
            <Text>{text}</Text>
        </View>);
}


const styles = StyleSheet.create({
    
});