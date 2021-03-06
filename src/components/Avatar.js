import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { AVATAR_BG_COLORS } from '../utils/sharedConstants';
import { SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from '../utils/sharedConstants';

export class Avatar extends Component {
  //TODO: Edit scroll view so scrolling up (finger swipe down) does not move the banner from top of screen
  //TODO: Create README for Avatar Component

  static defaultProps = {
    name: 'Fearlessly Girl',
    size: 'l',
  };

  render() {
    const { source, name, avatarSize } = this.props;

    const size = this.styleValuesFromSize(avatarSize).size;

    let inner = null;

    if (source) {
      inner = (
        <Image
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: 'white',
            borderWidth: 4,
          }}
          source={{ uri: source }}
        />
      );
    } else {
      const fontSizeForInitials = this.styleValuesFromSize(avatarSize).font;
      const topPaddingForInitials = this.styleValuesFromSize(avatarSize).padding;
      const initials = this.initialsFromName(name);
      const bgColor = this.backgroundColorFromInitials(initials);

      inner = (
        <Text
          style={[
            styles.textShadow,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              borderColor: 'white',
              borderWidth: 4,
              fontSize: fontSizeForInitials,
              backgroundColor: bgColor,
              color: 'white',
              overflow: 'hidden',
              textAlign: 'center',
              paddingTop: topPaddingForInitials,
              fontFamily: 'montserrat-bold',
            },
          ]}
        >
          {initials}
        </Text>
      );
    }

    return <View style={[styles.avatarShadow]}>{inner}</View>;
  }

  styleValuesFromSize(size) {
    if (size === 'small' || size === 's') {
      return { size: 78, font: 42, padding: 8 };
    } else if (size === 'large' || size === 'l') {
      return { size: 166, font: 72, padding: 32 };
    } else if (size === 'memberList' || size === 'mL') {
      return {
        size: BANNER_HEIGHT_WIDTH_RATIO * SCREEN_WIDTH,
        font: SCREEN_WIDTH * 0.15,
        padding: SCREEN_WIDTH * 0.08,
      };
    } else {
      console.log(
        `ERROR: Avatar Component: Invalid size, \'${size}\', passed to prop. Defaulting to size: 'large'. Avatar currently supports the following sizes: 'small' and 'large'.`
      );
      return { size: 166, font: 72 };
    }
  }

  initialsFromName(name) {
    if (!name) {
      return 'FG';
    } else {
      const nameArray = name.split(' ', 2);
      let initials = '';
      let i;
      for (i = 0; i < nameArray.length; i++) {
        initials += nameArray[i].toUpperCase().charAt(0);
      }
      return initials;
    }
  }

  //Selects a pastel background color for the Avatar based on the members initials
  backgroundColorFromInitials(initials) {
    if (!initials || initials.length < 2) {
      return AVATAR_BG_COLORS[0];
    } else {
      let colorIndex = (initials.charCodeAt(0) + initials.charCodeAt(1)) % AVATAR_BG_COLORS.length;
      return AVATAR_BG_COLORS[colorIndex];
    }
  }
}

const styles = StyleSheet.create({
  avatarShadow: {
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    elevation: 3,
    shadowRadius: 10,
    // background color must be set
    backgroundColor: '#0000', // invisible color
  },
  textShadow: {
    textShadowColor: 'gray',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
  },
});
