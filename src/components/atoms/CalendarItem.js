
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function CalendarItemPopulated({text}) {
    const [isExpanded, expandItem] = useState(false);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titletxt}>{text}</Text>
            </View>
            <View style={styles.btnbox}>
                <TouchableOpacity
                    style={styles.asdf}
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
                    <View style={styles.panel}>
                    
                        {/* time */}
                        <Text>Start time: 00:00; End time: null</Text>
                        <Text/>
                        {/* location */}
                        <Text>location: xyz</Text>
                        <Text/>
                        {/* description */}
                        <Text>
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
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
        paddingTop: 15
    },
    titletxt: {
        // fontWeight: 'bold',
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        paddingTop: 10,
        // paddingBottom: 10,
        paddingLeft: 5
    },
    detailtitle: {

    },
    detailtxt: {

    }
});