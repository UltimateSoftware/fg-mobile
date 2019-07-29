import React, {Component, useState,useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView, TextInput} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {Tiles} from '../components/molecules/Tiles';
import HamburgerIcon from '../components/primatives/HamburgerIcon';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';
import useHangouts from '../domain/models/Hangout';
import FgHangouts from '../pages/FgHangouts';
import DatePicker from "react-native-datepicker";

function DatepickerHangouts() {
  const [hangout, hangoutActions] = useHangouts();
  const {Hangouts, Status} = hangout; // Use Hangout to object to populate page
  const { navigate } = useNavigation();
  const item = useNavigationParam('item');
  const icebreaker = useNavigationParam('icebreaker');
  let newhangout = useNavigationParam("newhangout");
  const [currentDate, setDate] = useState(new Date());
  const [currentTime, setTime] = useState("12:00");
  const [currentLocation, setLoc] = useState("");

  useEffect(() => {
    //componentDidMount
    (
      async () => {
        await hangoutActions.loadHangouts();
      }
    )();

    /*return (
      () => {
        //componentDidUnmount
      }
    )*/
  }, []);

  return(
        <View style={{flex: 1}}>
            <View style={{...styles.title, flex: 2}} >
                <Text style={{...styles.title}}>
                    {"Choose a date, time, and location"}
                </Text>
            </View>
              <View style={{flex: 2}}>
                <Text style={{...styles.bodyText}}>Date:</Text>
                <DatePicker
                 mode="date"
                 date={currentDate}
                 onDateChange={(date) => {setDate(date);}}
                 minDate={new Date()}
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 style={{...styles.datepicker}}
                 customStyles={{dateText: {fontFamily: 'opensans'},
                 btnTextConfirm: {color: "#F313B7"},
                 dateInput: {borderColor: '#818282'}}}
                 />
              </View>
              <View style={{flex: 2}}>
                <Text style={{...styles.bodyText}}>Time:</Text>
                 <DatePicker
                  mode="time"
                  date={currentTime}
                  onDateChange={(time) => {setTime(time);}}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  style={{...styles.datepicker}}
                  customStyles={{dateText: {fontFamily: 'opensans'},
                  btnTextConfirm: {color: "#F313B7"},
                  dateInput: {borderColor: '#818282'}}}
                  />
              </View>
              <View style={{flex: 2}}>
                <Text style={{...styles.bodyText}}>Location:</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder="Input location here"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(loc) => {setLoc(loc);}}
                />
              </View>
            <View style={{...styles.buttonContainer}}>
              <View style={{...styles.selectButton}}>
                <TouchableHighlight underlayColor="transparent" onPress={() => {
                  newhangout["location"] = currentLocation;
                  newhangout["date"] = currentDate + " " + currentTime;
                  console.log(newhangout);
                }}>
                  <Text style={{...styles.buttonText}}>Finish</Text>
                </TouchableHighlight>
              </View>
            </View>
        </View>
      );
};

DatepickerHangouts.navigationOptions = () => {
    return {
        headerRight: <HamburgerIcon/>
    };
};

export default DatepickerHangouts;

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontFamily: 'montserrat-light',
      textAlign: 'center',
      color: '#818282',
      paddingTop: 10,
        },
    body: {
        fontSize: 30,
        textAlign: 'left',
        fontFamily: 'montserrat-bold',
        backgroundColor: 'white',
        color: 'white',
        margin: 20,
        lineHeight: 70,
    },
    headingText: {
      fontSize: 24,
      fontFamily: 'montserrat-light',
      textAlign: 'center',
      color: '#818282',
    },
    bodyText: {
      fontSize: 14,
      fontFamily: 'opensans',
      textAlign: 'center',
      paddingBottom: 10,
      color: '#59828B'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
        },
    selectButton: {
      backgroundColor: "#F313B7",
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'montserrat-bold',
      padding: 10,
    },
    textinput: {
      margin: 10,
      height: 40,
      marginBottom: 30,
      fontFamily: 'opensans',
      fontSize: 14,
      borderColor: '#818282',
      color: '#818282',
      paddingHorizontal: 10,
      borderWidth: 1,
      width: "80%",
      alignSelf: "center",
    },
    datepicker: {
      width: "80%",
      alignSelf: "center",
    }
});
