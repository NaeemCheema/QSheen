import React, { Component } from 'react';
import {View, Image} from 'react-native';

import {Text} from '../';
import {images} from '../../constants';
import styles from './logo.styles';

class Logo extends Component {
  render() {
    return (
      <View
        style={[styles.container, this.props.logoContainer]}
      >
        <Image
          source={images.logo}
          style={[styles.logoIcon, this.props.iconStyles]}
          resizeMode='contain'
        />
        {
          this.props.rightTitle || this.props.bottomTitle?
          <View style={[this.props.logotitleContainer]}>
            <Text style={[styles.title, this.props.iconTitle]}>
              Q
            </Text>
            <Text style={[styles.title, this.props.iconTitle]}>
              S
            </Text>
            <Text style={[styles.title, this.props.iconTitle]}>
              H
            </Text>
            <Text style={[styles.title, this.props.iconTitle]}>
              E
            </Text>
            <Text style={[styles.title, this.props.iconTitle]}>
              E
            </Text>
            <Text style={[styles.title, this.props.iconTitle]}>
              N
            </Text>
          </View>
          : null
        }
      </View>
    );
  }
}

export {Logo};
