
import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, BANNER_HEIGHT_WIDTH_RATIO } from "../../SharedConstants";
import { useState, useEffect } from 'react';

export function CalendarItemPopulated({text}) {
    // init state=false bc not expanded
    // const [isExpanded, expandItem] = useState(false);
    // changeBtn((isExpanded) => {
    //     if(true) {
             
    //     } else {
    //         <Button title = "+"/>
    //     }
    // })
    return (
        <View style={styles.container}>
            <View style={styles.txtbox}>
                <Text>{text}</Text>
            </View>
            <View style={styles.btnbox}>
                <Button
                    title="+"
                    onPress={() => {
                        return expandItem(!isExpanded);
                    }}
                />
                    
                {/* </Button> */}
            </View>
        </View>
        );
}


// modal ?
// const AgendaItem = createStackNavigator({
//     Main: {
//         screen: FgEvents
//     },
//     EventForm: {
//         screen: EventFormScreen
//     }},
//     {
//         mode: 'modal'
//      },
//  )





// handle = (state) => {
//     console.log("test handle");
//     if(state == true) {
//         title = "-";
//         console.log(title);
//     } else {
//         title = "+";
//         console.log(title);
//     }
//     return !state;
// }

// export function setState(state) {
//     if(state == true) {
//         title = "+"
//     } else {
//         title = "-"
//     }
//     return !state;
// }

// export function handle() {
//     //
//     return();
// }

export function CalendarItemEmpty() {
    return (<View style={styles.item}/>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        minHeight: 60
    },
    txtbox: {
        //
    },
    btnbox: {
        flex: 1,
        alignItems: 'flex-end',
        textAlign: 'right'
        // flex: 1,
        // // justifyContent: 'flex-end'
        // alignItems: 'right'
    }
    // need ?????
    // emptyDate: {
    //     height: 35,
    //     flex: 1,
    //     paddingTop: 30,
    //     backgroundColor: 'white',
    //     borderRadius: 5,
    //     marginTop: 17
    // }
});