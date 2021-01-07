import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';

import {Card,Touchable} from '../../../components';
import {data} from '../../../constants';
import styles from './brands.style';
import { STORAGE_URL } from '../../../config';
import {screens} from '../../../config';

class Brands extends Component {
  _renderItem = (item) => {
    const brands = item;
    return (
      <Touchable onPress={()=>this.props.navigation.navigate(screens.designerStack, {
        screen:screens.designerdetail,
        params:{
          item: brands
        }
        })}>
        <Card style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.avatar}}
              style={styles.brandImage}
              resizeMode='center'
            />
          </View>
        </Card>
      </Touchable>
      
    );
  }
  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(data) => {return(data.id.toString())}}
          contentContainerStyle={{ marginLeft: 3, paddingRight: 16 }}
          renderItem={({item})=>{
            return(
              this._renderItem(item)
            );
          }}
        />
      </View>
    );
  }
}

export {Brands};