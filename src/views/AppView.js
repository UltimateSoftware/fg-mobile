import React, { Component } from 'react'

import { SceneView } from '@react-navigation/core'

export default class AppView extends Component {
    render() {
        const { descriptors, navigation} = this.props;
        const activeKey = navigation.state.routes[navigation.state.index].key;
        const descriptor = descriptors[activeKey]

        return (
            <div style={{ height: "100%" }}>
                <h1>My Project</h1>
                <div>
                    <SceneView 
                        navigation={descriptor.navigation}
                        component={descriptor.getComponent()}
                    />
                </div>
            </div>
        )
    }
}