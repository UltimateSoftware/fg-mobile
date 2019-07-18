import React, { Component } from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {Inspiration} from './atoms/Inspiration';
import {ProfileLabel} from './molecules/ProfileLabel';

export class ChapterHistoryComponent extends Component {
    render() {
        const {
            body,
            profiles
        } = this.props;

        return (
          <View style={styles.paragraphs}>
              <Inspiration title={"Our history"} inspiration={body} />
              <ScrollView>
                  <FlatList
                        data={profiles}
                        numColumns={2}
                        scrollEnabled={false}
                        renderItem={({item}) => 
                        <ProfileLabel image={item.image} name={item.name} position={item.position} />
                    }/>
              </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    paragraphs: {
        flex: 1,
        alignItems: "center",
    },
});