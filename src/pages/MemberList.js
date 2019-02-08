import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { Banner } from '../components/Banner';
import { BANNER_HEIGHT_WIDTH_RATIO, SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/sharedConstants';
import { MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR } from '../test/MockedTypes';

//TODO: Make Mock Data
export class MemberList extends React.Component {
  member = MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR; //stub member for now

  render() {
    let renderMembers = [];
    for (i = 0; i < 5; i++) {
      renderMembers.push(
        <View key={i}>
          <Avatar avatarSize={'memberList'} name={this.member.fullName()} source={this.member.avatarSource} />
          <Text style={[styles.textContainer, styles.nameLabel]}>{this.member.fullName()}</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.container}>{renderMembers}</View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scrollViewStyle: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    opacity: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  textContainer: {
    color: '#818282',
    textAlign: 'center',
  },
  nameLabel: {
    fontFamily: 'montserrat-light',
    fontSize: 18,
  },
  schoolLabel: {
    fontFamily: 'open-sans-regular',
    fontSize: 16,
  },
  gradYearLabel: {
    fontFamily: 'open-sans-regular',
    fontSize: 14,
  },
});
