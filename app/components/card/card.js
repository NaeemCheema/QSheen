import React from 'react';
import {View} from 'react-native';

import styles from './card.styles';

const Card = (props) => (
  <View style={[styles.cardContainer, props.style]}>
    {props.children}
  </View>
)

export {Card};
