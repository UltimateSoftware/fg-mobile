import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

export class EditButton extends Component {
  //TODO: Create README for EditButton Component

  static defaultProps = {
    name: 'md-settings',
    type: 'ionicon',
    color: '#59828B',
    size: 'large'
  };

  render() {
    const { name, type, size, color, onPress } = this.props;

    const buttonSize = this.styleValuesFromSize(size).size;

    return (
      <Icon 
        name={name}
        type={type}
        color={color}
        size={buttonSize}
        onPress={() => onPress()}
      />
    );
  }

  styleValuesFromSize(size) {
    if (size === 'small' || size === 's') {
      return { size: 24 };
    } else if (size === 'large' || size === 'l') {
      return { size: 32 };
    } else {
      console.log(
        `ERROR: Edit Button Component: Invalid size, \'${size}\', passed to prop. Defaulting to size: 'large'. Edit Button currently supports the following sizes: 'small' and 'large'.`
      );
      return { size: 32 };
    }
  }
}

EditButton.propTypes = {
  onPress: PropTypes.func.isRequired
};
