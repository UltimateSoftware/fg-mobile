import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native'

export function ProfileFrame({source, avatarSize}) {
    const size = styleValuesFromSize(avatarSize).size;
    const image = source ? require('../../../assets/Heart_SVG.png') : source
    return (
        <View style={[{flex: 1, alignItems: "center"}, styles.elevation]}>
            <Image
          style={[{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: 'white',
            borderWidth: 4,
            flex: 1,
            
          }, ]}
          source={image}
        />
        </View>
        
    );

    function styleValuesFromSize(size) {
        if (size === 'small' || size === 's') {
          return { size: 78, font: 42, padding: 8 };
        } else if (size === 'large' || size === 'l') {
          return { size: 128, font: 72, padding: 32 };
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
}

const styles = StyleSheet.create({
    elevation: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
});