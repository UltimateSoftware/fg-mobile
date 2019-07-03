import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ProfileFrame} from '../primatives/ProfileFrame';

export function ProfileLabel({image, name, position}) {
    return (
      <View style={styles.leadershipImages}>
          <ProfileFrame source={image} avatarSize={'l'}/>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.positionText}>{position}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    leadershipImages: {
        margin: 10
    },
    nameText: {
        textAlign: 'center', 
        color: 'gray',
        marginTop: 10,
    },
    positionText: {
        textAlign: 'center', 
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 12,
    },
});