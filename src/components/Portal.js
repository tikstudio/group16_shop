import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      el: null
    }
  }

  componentDidMount() {
    const portal = document.getElementById('header-portal');
    const el = document.createElement('div');
    portal.appendChild(el)
    this.setState({ el })
  }

  render() {
    const { el } = this.state
    if (!el) {
      return null
    }
    return ReactDOM.createPortal(
      this.props.children,
      el
    );
  }
}

export default Portal;
