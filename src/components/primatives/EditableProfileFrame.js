import React, {Component} from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, Button} from 'react-native'

export function EditableProfileFrame (props){

    const {source, avatarSize, editable} = props

    const size = this.styleValuesFromSize(avatarSize).size;

    if(editable)
    {               
        return (
            <View style={[{flex: 1, alignItems: 'center'}, styles.elevation]}>
                <ImageBackground
            style={[{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderColor: 'white',
                borderWidth: 4,
                flex: 1,
            }, ]}
            source={source}>
                <Button title="choose avatar file" onPress={event => chooseAvatarFile()} textStyle={{fontSize: 14}}/>
            </ImageBackground>
            <Button title="choose banner file" onPress={event => chooseBannerFile()} textStyle={{fontSize: 14}}/>
            </View>
        );
    }
    else{
        return (
            <View style={[{flex: 1, alignItems: 'center'}, styles.elevation]}>
                <Image
                style={[{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderColor: 'white',
                borderWidth: 4,
                flex: 1,
                }, ]}
                source={source}
            />
            </View>            
        );
    }
}

styleValuesFromSize = (size) => {
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

handleToggleEditMode = () => {
    this.setState((prev) => ({
        editable: !prev.editable
    }))

    if (this.state.viewStyle === styles.subViewStyle) {
        this.setState(() => ({
            viewStyle: styles.editSubViewStyle
        }))
    } else {
        this.setState(() => ({
            viewStyle: styles.subViewStyle
        }))
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