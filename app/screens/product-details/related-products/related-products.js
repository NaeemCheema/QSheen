import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image
} from 'react-native';

import {
  ProductTile,
  Text,
  Touchable
} from '../../../components';
import {images, getPercentageHeight, getPercentageWidth} from '../../../constants';
import styles from './related-products.styles';

class RelatedProducts extends Component {
  render() {
    const {productsData} = this.props;
    console.log('productsData: ', productsData.data);
    return (
      <View style={{ marginTop: getPercentageHeight(35) }}>
        <Text style={styles.similarItemText}>Similar Items</Text>
        <FlatList
          data={productsData.data}
          renderItem={(item) => (
            <View style={{ alignItems: 'center' }}>
              <ProductTile item={item.item}
                onPress={() => this.props.navigation.navigate(screens.productDetails, {
                  product: item,
                })}
              />
            </View>
          )}
          //numColumns={2}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ height: getPercentageHeight(13.5), width: getPercentageWidth(20) }} />}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{ marginTop: getPercentageHeight(14.5), paddingBottom: getPercentageHeight(25) }}
          showsVerticalScrollIndicator={true}
          bounces={false}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Touchable>
            <Image style={styles.arrowButtonImages} source={images.leftArrow} />
          </Touchable>
          <Touchable>
            <Image style={styles.arrowButtonImages} source={images.rightArrow} />
          </Touchable>
        </View>
      </View>
    );
  }
}

export default RelatedProducts;
