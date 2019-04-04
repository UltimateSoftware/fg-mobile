import React from 'react';

export const GlobalContext = React.createContext();

export class GlobalProvider extends React.Component {

  constructor(props) {
    super(props);
    state = {
      firstName: null,
      lastName: null,
      schoolName: null,
      gradYear: null,
      inspiration: null,
      username: null,
    }
  }

    render(){
      return(
        <GlobalContext.Provider value={{
            state: this.state,
            updateFirstName: () => this.setState({
                firstName: thing
            })
          }}>
          {this.props.children}
        </GlobalContext.Provider>
      )
    }
    }

