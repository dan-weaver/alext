import React from 'react';

export default class TestComponent extends React.Component {
  componentDidMount() {
    alert('test');
  }
  render() {
    return(<div>test</div>)
  }
}
