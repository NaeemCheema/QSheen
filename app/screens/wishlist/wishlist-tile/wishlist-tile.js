import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Text,
  Touchable,
  Card,
} from '../../../components';
import { STORAGE_URL } from '../../../config';
import { images } from '../../../constants';
import styles from './wishlist-tile.style';

class Wishlist extends Component {

  render() {
    const {data} = this.props;
    return (
      <Card style={styles.card}>
        <View style={styles.firstContainer}>
          <Image source={{uri: data.product_image}} style={styles.image}/>
          <Touchable style={styles.noteTextContainer}>
            <Text style={styles.noteText}>Add Note</Text>
            <FontAwesome5 name="comment" color={"#CE8678"} size={25} />
          </Touchable>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.secondInnerContainer}>
            <View style={styles.productContainer}>
              <Text style={styles.productNameText}>{data.product_title}</Text>
              <Text style={styles.designerNameText}>{data.store_name}</Text>
              <Text style={styles.price}>QR {data.price}</Text>
            </View>
            <Touchable onPress={() => this.props.onPressDelete(this.props.data)} style={styles.trashContainer}>
              <Image source={images.trash} style={styles.trashIcon}/>
            </Touchable>
          </View>
        </View>
      </Card>
    );
  }
}

export {Wishlist};
