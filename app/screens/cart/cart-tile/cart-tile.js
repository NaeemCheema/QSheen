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
import styles from './cart-tile.style';

class CartTile extends Component {

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
          <View style={styles.counterContainer}>
            <Touchable style={styles.decrement} onPress={() => this.props.onCounterPress(this.props.data, data.qty-1)}>
              <Image source={images.minus} style={styles.decrementImage}/>
            </Touchable> 
            <View style={styles.counterNumberStyle}>
              <Text style={styles.counterNumber}>{data.qty}</Text>
            </View>
            <Touchable style={styles.increment} onPress={() => this.props.onCounterPress(this.props.data, data.qty+1)}>
              <Image source={images.plus} style={styles.incrementImage}/>
            </Touchable>
          </View>
        </View>
      </Card>
    );
  }
}

export {CartTile};
