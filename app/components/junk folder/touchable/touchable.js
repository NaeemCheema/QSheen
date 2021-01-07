import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Touchable extends Component {
  render() {
    return (
      <TouchableOpacity
        underlayColor='transparent'
        activeOpacity={0.7}
        {...this.props}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

Touchable.propTypes = {
  onPress: PropTypes.func
};

export { Touchable };
