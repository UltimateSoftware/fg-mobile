import React from 'react';
import { ScrollView, FlatList, View, Text, SectionList, Card } from 'react-native';
import console = require('console');

export class EventsList extends React.Component {

  monthList = [{value: 'January', key: '01'}, {value: 'February', key: '02'}, {value: 'March', key: '03'}, {value: 'April', key: '04'}, 
               {value: 'May', key: '05'}, {value: 'June', key: '06'}, {value: 'July', key: '07'}, {value: 'August', key: '08'}, 
               {value: 'September', key: '09'}, {value: 'October', key: '10'}, {value: 'November', key: '11'}, {value: 'December', key: '12'}]

  constructor(props) {
    super(props);
  }

  getMonthEvents(month) {
    monthEvents = [];
    for(var i = 0; i < this.props.fgEvents.length; i++) {
      if(this.props.fgEvents[i].date.slice(5,7) === month) {
        monthEvents.push(this.props.fgEvents[i])
      }
    }
    return monthEvents;
  }

  render() {
    console.log(this.props.fgEvents)
    return (
      <ScrollView
        style={{opacity: 1, flex: 1, paddingBottom: 5}}
        bounces={false}
      >
      <View style={{flex: 1, position: 'relative'}}>
        <SectionList
          renderItem={({item, index, section}) =>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        }
        sections={[
          {title: 'January', data: this.getMonthEvents('01')},
          {title: 'February', data: this.getMonthEvents('02')},
          {title: 'March', data: this.getMonthEvents('03')},
          {title: 'April', data: this.getMonthEvents('04')},
          {title: 'May', data: this.getMonthEvents('05')},
          {title: 'Juna', data: this.getMonthEvents('06')},
          {title: 'July', data: this.getMonthEvents('07')},
          {title: 'August', data: this.getMonthEvents('08')},
          {title: 'September', data: this.getMonthEvents('09')},
          {title: 'October', data: this.getMonthEvents('10')},
          {title: 'November', data: this.getMonthEvents('11')},
          {title: 'December', data: this.getMonthEvents('12')},
        ]}
        keyExtractor={(item, index) => item + index}
        />
      </View>
      </ScrollView>
    ); 
  }
}