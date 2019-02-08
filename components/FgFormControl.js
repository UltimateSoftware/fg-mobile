import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import FormControlContext from '.context/FgFormControlContext'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export class FgFormControl extends Component {
    render() {
        const {childContext, children} = this.props;
        // handles errors, provides the value from the component?
        return (
            <FormControlContext.Provider value={childContext}>
                {children}
            </FormControlContext.Provider>
        );
    }
}

FgFormControl.propTypes = {
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