import { Avatar } from "../components/Avatar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export class ProfileListComponent extends React.Component {

  //TODO: redirect to profile page of tapped user. 
  _onProfilePress = () => {
    alert(this.props.fullName);
  }

  render() {
    return (
      <div>
        <View style={styles.container}>
          <TouchableOpacity onPress={this._onProfilePress}>
          <Avatar
            avatarSize={"memberList"}
            name={this.props.fullName}
            source={this.props.image}
          />
          </TouchableOpacity>
          <Text style={[styles.textContainer, styles.nameLabel]}>
            {this.props.fullName}
          </Text>
        </View>
      </div>
    );
  }
}
export default ProfileListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "whitesmoke"
  },
  textContainer: {
    color: "#818282",
    textAlign: "center"
  },
  nameLabel: {
    fontFamily: "montserrat-light",
    fontSize: 18
  }
});
