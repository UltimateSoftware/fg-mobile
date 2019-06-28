import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
// import {Modal} from 'react-native';

export function Modal() {
    state = {
        isVisible: false
    };

    toggleModal = () => {
        this.setState({ isVisible: !this.state.isVisible});
    };

    return(
        <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={this.toggleModal} />
            <Modal isVisible={this.state.isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>
                    <Button title="Hide modal" onPress={this.toggleModal} />
                </View>
            </Modal>
        </View>
    )
}








// import React,{Component,StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native';
// import PropTypes from 'prop-types';

// export function Panel(props){
//     const {title, renderBody} = props;
//     return(
//         <View>
//             <Text>{this.title}</Text>
//             <View>
//                 {renderBody()}
//             </View>
//         </View>);
// }

// var styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff',
//         margin: 10,
//         overflow:'hidden'
//     },
//     titleContainer: {
//         flexDirection: 'row'
//     },
//     title: {
//         flex: 1,
//         padding: 10,
//         color:'#2a2f43',
//         fontWeight:'bold'
//     },
//     button: {

//     },
//     buttonImage: {
//         width: 30,
//         height: 25
//     },
//     body: {
//         padding: 10,
//         paddingTop: 0
//     }
// });
