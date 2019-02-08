import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export class FgLink extends Component {
    render() {
        const {title, onPress} = this.props;
        return (
            <View >
                <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
                    <Text style={styles.textStyle}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

FgLink.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        color: '#F313B7',
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        textDecorationLine: 'underline',
      },
    
      buttonStyle: {
        paddingVertical: 16,
        borderRadius: 0
      },
    
});