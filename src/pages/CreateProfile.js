import {ProfileForm} from "../components/ProfileForm";
import React, {Component} from 'react';
import {FgMember} from "../types/FgMember";

export class CreateProfile extends React.Component {
    render() {
        return (
            <ProfileForm
                title="Create your profile"
                state="create"
            />
    );
    }

    
}

