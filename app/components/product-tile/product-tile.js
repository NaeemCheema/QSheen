import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  Text,
  Touchable,
  Card,
  Button,
} from '../';
import styles from './product-tile.styles';
import { images } from '../../constants';
import { STORAGE_URL } from '../../config';

class ProductTile extends Component {
  render() {
    const {item} = this.props;
    return ( item !== undefined && (
      <Card style={styles.card}>
        <Touchable style={styles.container} onPress={this.props.onPress}>
          <Image
            source={{ uri: item.image }} 
            style={styles.productImage} />
          <Text style={styles.productName} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.price}> QR {item.price}</Text>
          <Button
            buttonStyles={styles.button}
            buttonTitle={'ADD TO CART'}
            buttonTitleStyles={styles.buttonTitle}
            rightIcon={<Image source={images.cart} />}
          />
        </Touchable>
      </Card>
    )
    );
  }
}

export {ProductTile};
