import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import {PLACEHOLDER_TEXT_COLOR, SCREEN_WIDTH} from "../utils/sharedConstants";
import { TextInput } from 'react-native-gesture-handler';
import { FgButton } from "../components/FgButton";
import { ChapterService } from '../services/ChapterService';

export class FgModal extends Component {
  state = {
    modalVisible: true,
    transparent: true,
    schoolName: ''
  };

  constructor(props) {
    super(props);
    this.chapterService = new ChapterService();
  }

  requestAccess(){
    return
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };
    var innerContainerTransparentStyle = {
      backgroundColor: '#fff', padding: 20
    };

    var {toggleMethod, componentState, updateMemberMethod} = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text style= {styles.titleText}>
                Request Access To A Chapter
              </Text>
              <TextInput
                        style={styles.textInputStyle}
                        placeholder={'School Name'}
                        placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                        onChangeText={(text) => this.setState({schoolName: text})}
                        value={this.state.schoolName}/>
              <View style = {styles.submitButtonStyle}>
              <FgButton
                title= "Request Access"
                onPress={() => {
                  this.chapterService.joinChapter(this.state.schoolName).then(response => {
                    updateMemberMethod(response.chapterId);
                  }).catch(error => {
                    console.log(error);
                  });
                  toggleMethod(false, componentState);
                }}
              />
              </View>
              <TouchableHighlight
                onPress={() => {
                  toggleMethod(false, componentState);
                }}>
              <Text style= {styles.skipText}>Skip for now</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 60,
  },
  innerContainer: {
    borderRadius: 20,
    alignItems: 'center',
  },
  skipText: {
    textDecorationLine: 'underline',
    color: PLACEHOLDER_TEXT_COLOR
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    marginBottom: 20
  },
  submitButtonStyle: {
    width: '80%',
    marginTop: 60,
    marginBottom: 20
},
textInputStyle: {
  fontFamily: 'open-sans-regular',
  fontSize: 16,
  borderColor: '#BDCDD1',
  borderBottomWidth: 1,
  width: SCREEN_WIDTH * 0.65,
  height: 35,
  lineHeight: 20,
  margin: 20
}
});