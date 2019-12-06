import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class DropdownMenu extends Component {
  render() {
    const { open, children } = this.props;
    return (
      <CSSTransitionGroup
        component="div"
        transitionName="dropdownOpen"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {open ? (
          <div className="dropdown-menu open">
            {children}
          </div>
        ) : null}
      </CSSTransitionGroup>
    );
  }
}

export default DropdownMenu;
