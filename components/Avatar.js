import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SIZE = SCREEN_WIDTH * 0.40;
const TOP = (SCREEN_WIDTH * 0.45) - (SIZE / 2);
const styles = StyleSheet.create({

    avatar: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: '#F313B7',
        borderColor: '#fff',
        borderWidth: 4,
        top: TOP,
        ...Platform.select({
            ios: {
                shadowColor: 'red',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.8,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),


    }
});


export class Avatar extends Component {

    static defaultProps = {
        name: 'Fearlessly Girl',
    }

    render() {
        let inner = null;
        const {
            source,
            name,
            color
        } = this.props;

        if(source) {
            inner = <Image style={styles.avatar} source={source}/>
        } else {
            const initials = this.initialsFromName(name);
            inner = <Text style={styles.avatar}>{initials}</Text>
        }
        return <View>{inner}</View>
    }

    static initialsFromName(name) {
        if(!name) {
            return 'FG';
        }else {
            const nameArray = name.split(' ', 2);
            let initials = '';
            let i;
            for(i = 0; i < nameArray.length; i++) {
                initials += nameArray[i].toUpperCase().charAt(0);
            }
            return initials;
        }
    }


}
