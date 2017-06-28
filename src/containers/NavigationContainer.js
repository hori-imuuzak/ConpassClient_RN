import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import Navigation from '../routes/Navigation';

class Nav extends Component {
  render() {
    return (
      <Navigation
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Nav);