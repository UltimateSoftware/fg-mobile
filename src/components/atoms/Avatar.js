import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native'
import {ProfileFrame} from '../primatives/ProfileFrame';

export function Avatar({source, avatarSize}) {

    return (
        <ProfileFrame source={source} avatarSize={avatarSize}/>
    );
}