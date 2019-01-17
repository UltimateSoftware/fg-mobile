import React, { Component } from 'react';

const withLifeCycle = ({onMount, onUpdate}) => Cmp => {
  class WithLifeCycle extends Component {
    render() {
      return <Cmp {...this.props}/>
    }
  }

  if (onMount) {
    WithLifeCycle.prototype.componentDidMount = onMount;
  }
  if (onUpdate) {
    console.log('attaching onUpdate');
    WithLifeCycle.prototype.componentDidUpdate = onUpdate;
  }

  return WithLifeCycle
}

export default withLifeCycle;