import React, { Component } from 'react';
import { Image, Text, View }  from 'react-native';

export class Avatar extends Component {

    //TODO: Add box shadow to Avatar component.
    //TODO: Ask about default background color and text color for initials
    //TODO: Create README for Avatar Component

    static defaultProps = {
        name: 'Fearlessly Girl',
        size: 'l'
    };

    render() {
        const {
            source,
            name,
            avatarSize
        } = this.props;

        const size = this.styleValuesFromSize(avatarSize).size;
        const fontSizeForInitials = this.styleValuesFromSize(avatarSize).font;
        const topPaddingForInitials = this.styleValuesFromSize(avatarSize).padding;


        let inner = null;

        if(source) {
            inner =
                <Image
                    style={{
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderColor: 'white',
                        borderWidth: 4
                    }}
                    source={{uri: source}}
                />
        }else {
            inner =
                <Text
                    style={{
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderColor: 'white',
                        borderWidth: 4,
                        fontSize: fontSizeForInitials,
                        backgroundColor: '#F313B7',
                        color: 'white',
                        overflow: 'hidden',
                        textAlign: 'center',
                        paddingTop: topPaddingForInitials
                    }}
                >
                    { this.initialsFromName(name) }
                </Text>
        }

        return (
            <View>{ inner }</View>
        );


    }

    styleValuesFromSize(size) {
        if (size === 'small' || size === 's') {
            return { size: 78, font: 42, padding: 8 } ;
        }else if (size === 'large' || size === 'l') {
            return { size: 166, font: 84, padding: 25 } ;
        }else {
            console.log(`ERROR: Avatar Component: Invalid size, \'${size}\', passed to prop. Defaulting to size: 'large'. Avatar currently supports the following sizes: 'small' and 'large'.`)
            return { size: 166, font: 72 };
        }
    }

   initialsFromName(name) {
        console.log(name);
        if(!name) {
            return 'FG';
        }else {
            const nameArray = name.split(' ', 2);
            let initials = '';
            let i;
            for(i = 0; i < nameArray.length; i++) {
                initials += nameArray[i].toUpperCase().charAt(0);
            }
            return initials;
        }
    }


}
