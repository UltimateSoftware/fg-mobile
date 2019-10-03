import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import {frames, text_sizes, spacing} from '../../SharedConstants';

export function ProfileFrame({source, avatarSize}) {
    console.log(avatarSize)
    const size = styleValuesFromSize(avatarSize).size;
    const margin = styleValuesFromSize(avatarSize).margin;

    var image = source

    return (
        <View style={[{alignItems: "center", marginTop: margin}, styles.elevation]}>
            <Image
          style={[{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: 'white',
            borderWidth: 4,
            
          }, ]}
          source={image}
        />
        </View>
        
    );

    function styleValuesFromSize(size) {
        if (size === 'extraSmall' || size === 'xs'){
          return {size: frames.md, font: text_sizes.xs, padding: 4, margin: spacing.xlg };
        } else if (size === 'small' || size === 's') {
          return { size: frames.lg, font: text_sizes.sm, padding: 8, margin: spacing.xlg };
        } else if (size === 'large' || size === 'l') {
          return { size: frames.xlg, font: text_sizes.lg, padding: 32, margin: spacing.md };
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