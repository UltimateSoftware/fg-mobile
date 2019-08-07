
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function CalendarItemPopulated({text}) {
    const [isExpanded, expandItem] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.titletxt}>{text}</Text>
                <TouchableOpacity
                    style={styles.iconpos}
                    onPress={() => {
                        return expandItem(!isExpanded);
                    }}
                >
                    <Icon name={isExpanded ? "chevron-up" : "chevron-down"}/>
                </TouchableOpacity>
            </View>
            <View style={styles.btnbox}>
                
                {
                    isExpanded && 
                    // need to get details from backend
                    <View style={styles.panel}>
                        <Text h5 style={styles.detailtitle}>Time</Text>
                            <Text p style={styles.detailtxt}>00:00 pm</Text>
                        <Text h5 style={styles.detailtitle}>Location</Text>
                            <Text p style={styles.detailtxt}>123 asdf lol</Text>
                        <Text h5 style={styles.detailtitle}>Description</Text>
                            <Text p style={styles.detailtxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                            </Text> 

                    </View>
                }
            </View>
        </View>
        );
}

export function CalendarItemEmpty() {
    return (<View style={styles.item}/>)
}

const styles = StyleSheet.create({
    flex: {
      flex: 1,
      alignItems: 'center',
      flexDirection:'row',
    },
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 16,
        // minHeight: 65
        minHeight: 45
    },
    btnbox: {
        flex: 1,
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    panel: {
        paddingTop: 10
    },
    titletxt: {
        fontFamily: 'montserrat-regular',
        color: '#59828B',
        fontSize: 22,
        paddingTop: 10,
        paddingLeft: 5
    },
    iconpos: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 5,
        alignItems: 'flex-end',
    },
    detailtitle: {
        paddingTop: 5,
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#59828B'
    },
    detailtxt: {
        fontFamily: 'open-sans',
        fontSize: 16,
        paddingLeft: 6,
        color: '#818282'
    }
});