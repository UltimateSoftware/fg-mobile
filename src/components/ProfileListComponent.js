import { Avatar } from "../components/Avatar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class ProfileListComponent extends React.Component {
  render() {
    return (
      <div>
        <View style={styles.container}>
          <Avatar
            avatarSize={"memberList"}
            name={this.props.fullName}
            source={this.props.image}
          />
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
    flexDirection: "row",
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
