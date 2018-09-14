import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Banner } from "./Banner";
import { Avatar } from "./Avatar";


const styles = StyleSheet.create({
    header_styles: {
     justifyContent: 'center',
     alignItems: 'center'
    }
});

export class Header extends React.Component {


    render() {
        const { bannerSource, avatarSource } = this.props;
        return (
            <View style={styles.header_styles}>
                <Banner source={bannerSource}/>
                <Avatar source={avatarSource}/>
            </View>
        );
    }
}
