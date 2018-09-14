import React, { Component } from 'react';
import {
    Image,
    Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HEIGHT_WIDTH_RATIO = 0.45;

export class Banner extends Component {

    static defaultProps = {
        source: require('../assets/default-banner.png')
    }

    render(){
        const source = this.props.source;
        return (
        <Image
            source={ source }
            style={{
                height: SCREEN_WIDTH * HEIGHT_WIDTH_RATIO,
                width: SCREEN_WIDTH,
                position: 'absolute'
            }}
        />)
    }
}
