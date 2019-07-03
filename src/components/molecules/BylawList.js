import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {ParagraphBlock} from '../primatives/ParagraphBlock';

export function BylawList({bylaws}) {
    return (
      <View>
          <FlatList
              data={bylaws}
              scrollEnabled={false}
              renderItem={({item}) => 
              <React.Fragment>
                  <Text style={styles.textList}>{item.header}</Text>
                  <ParagraphBlock inspiration={item.body} />
              </React.Fragment>
          }/>
      </View>
    )
}

const styles = StyleSheet.create({
    textList: {
        alignItems: "center",
        fontWeight: "bold",
        color: 'gray',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 40,
        marginBottom: -30,
    },
});