import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {TextInput, Text} from 'react-native';

export class FgTextInput extends Component {
    render(){
        const { 
            disableUnderline, 
            classes, 
            disabled, 
            className, 
            error, 
            fullWidth, 
            id, 
            onChange, 
            placeholder, 
            readOnly, 
            required,
            ...other
         } = this.props;

        return (
            <div>
                <TextInput
                    id={id}
                    classes={{
                        ...classes, className,
                        root: classNames(classes.root, {
                        [classes.underline]: !disableUnderline,
                        }),
                        underline: null,
                    }}
                    editable={disabled} 
                    selectTextOnFocus={readOnly}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    {...other}
                />
                {error && <Text style={{ color: "red" }}>{this.state.nameError}</Text>}
            </div>
          );

    }
}

FgTextInput.prototype = {
    autoFocus: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableUnderline: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
}

FgTextInput.defaultProps = {
    fullWidth: false,
    disabled: false,

  };