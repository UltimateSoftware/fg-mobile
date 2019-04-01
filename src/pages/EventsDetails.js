import React from 'react'
import {StyleSheet, Text, Modal, View} from 'react-native'
import {Header, Card, CardItem, Button} from 'native-base'

export class EventsDetails extends React.Component {
    
    constructor(props) {
        super(props);
        //isVisible
        //title
        //location
        //isGoing
    }

    updateGoing = (update) => {
        this.setState(() => ({
            isGoing: update
        }));
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent = {true}
                visible = {this.props.isVisible}
            >
            <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <Card
                    style={{
                        borderColor: 'black',
                        borderRadius: 15,
                        borderWidth: 10,
                        borderStyle: 'solid',
                        width: '85%',
                        flexGrow: 0.02,
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Button
                    onPress={this.props.onClose}
                    style={{marginLeft: 15, marginTop: 5, backgroundColor: 'white', height: 30}}
                    >
                        <Text style={{fontSize: 16}}>
                            X
                        </Text>
                    </Button>
                    <CardItem //text
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: 0,
                        marginTop: 0
                    }}
                    >
                        <Text style={{fontFamily: 'montserrat-bold', fontSize: 24, marginBottom: '2%', marginTop: 0}}>
                            {this.props.title}
                        </Text>
                        <Text style={{fontFamily: 'montserrat-regular', fontSize: 14, marginBottom: '2%'}}>
                            {this.props.location}
                        </Text>
                        <Text style={{fontFamily: 'montserrat-regular', fontSize: 12}}>
                            {this.props.date}
                        </Text>
                    </CardItem>
                    <CardItem //attending response
                    style={{
                        justifyContent: 'space-between',
                        width: '80%'
                    }}>
                        <Text>
                            Attending?
                        </Text>
                        <Button 
                        style={this.state.isGoing? styles.selectedButton : styles.unselectedButton}
                        onPress = {() => this.props.updateGoing(true)}
                        >
                            <Text>
                                Yes
                            </Text>
                        </Button>
                        <Button 
                        style={!this.state.isGoing? styles.selectedButton : styles.unselectedButton}
                        onPress = {() => this.updateGoing(false)}
                        >
                            <Text>
                                No
                            </Text>
                        </Button>
                    </CardItem>
                </Card>
            </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
        selectedButton: {
            justifyContent: 'center',
            borderColor: 'tomato',
            borderRadius: 25,
            borderStyle: 'solid',
            borderWidth: 3,
            backgroundColor: 'white',
            width: 60,
        },
        unselectedButton: {
            justifyContent: 'center',
            borderColor: 'gray',
            borderRadius: 25,
            borderStyle: 'solid',
            borderWidth: 1,
            backgroundColor: 'white',
            width: 60
        }
})