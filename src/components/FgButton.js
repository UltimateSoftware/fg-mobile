import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export class FgButton extends Component {
    render() {
        const {title, onPress} = this.props;
        return (
            <View style={styles.shadowStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
                    <Text style={styles.textStyle}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

FgButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    },

    buttonStyle: {
        paddingVertical: 16,
        backgroundColor: '#F313B7',
        borderRadius: 50
    },

    shadowStyle: {
        shadowOffset: {width: 0, height: 10},
        shadowColor: '#48173B',
        shadowOpacity: 0.32,
        elevation: 3,
        shadowRadius: 5,
        // background color must be set
        backgroundColor: "#0000" // invisible color
    }
});