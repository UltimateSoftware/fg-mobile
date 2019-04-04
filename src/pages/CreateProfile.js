import {ProfileForm} from "../components/ProfileForm";
import React, {Component} from 'react';
import {Alert} from 'react-native';
import {FgMember} from "../types/FgMember";
import {FgProfileService} from "../services/FgProfileService";
import {DataManager, SIGNED_IN_MEMBER, SIGNED_IN_MEMBER_ID} from "../DataManager";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export class CreateProfile extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
        this.handleSignIn.bind(this);
    }

    service = new FgProfileService();
    
    render() {
        return (
            <ProfileForm
                title="Create your profile"
                state="create"
                onPressSubmitFunction={this.handleSubmit}
                onPressBackFunction={() => {this.handleSignIn();}}
            />
        );
    }

    handleSubmit = (member) => {
        // Grab the navigator
        const { navigate } = this.props.navigation;
        // Create member object from form field values
        const fgMember = new FgMember(member.firstName, member.lastName,
            member.schoolName, member.gradYear, null, null, member.inspiration);
        // Create member through backend service, store member to local storage, and proceed to SignedIn navigator
        this.service.createMember(fgMember);
        this.props.navigation.navigate('Auth');
    }

    handleSignIn() {
        const { navigate } = this.props.navigation;
        navigate("SignIn");
    }
}

