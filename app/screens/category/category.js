import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ImageBackground
} from 'react-native';

import {
  Header,
  Text,
  Slider,
  Card,
  Touchable,
} from '../../components';
import {screens} from '../../config';
import {images, data} from '../../constants';
import { STORAGE_URL } from '../../config';
import styles from './category.style';

class Category extends Component {
  componentDidMount() {
    this.props.fetchCategoriesRequest();
  }

  _sliderContent = () => {
    return [1,2,2].map(item => {
      return (
        <View style={styles.sliderContentContainer}>
          <Image
            source={images.category_cover} 
            style={styles.sliderCategory}
            //resizeMode= 'cover'
          />
          <View style={styles.sliderContent}>
            <Text style={styles.sliderTitle}>Dana</Text>
            <Text style={styles.sliderDetails}>Slogan or Catchy Product Ad statement</Text>
          </View>
        </View>
      );
    });
  }
  _renderItem = ({item}) => {
    return (
      <Touchable
        style={{ width: '100%', alignItems: 'center' }}
        onPress={()=>{this.props.navigation.navigate(screens.categorydetail,{item})}}
      >
        <ImageBackground
        source={{uri: STORAGE_URL+'category/'+item.cover_img}}
          style={styles.categoryCover}
          resizeMode="cover"
        >
          <Image source={images.rectangle} style={styles.categoryGradient}/>
          <Text style={styles.categoryName}>{item.name}</Text>
        </ImageBackground>
      </Touchable>
    );
  }
  render() {
    const {category} = data;
    const {categoriesData} = this.props;
    return (
      <View style={styles.screen}>
        <Header
          transparent
        />
        <Slider
          sliderContainerStyles={styles.sliderContainer}
          renderedContent={this._sliderContent}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        />
        <Card style={styles.listContainer}>
          <FlatList
            data={categoriesData.data}
            renderItem={(item) => {
              return (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  {this._renderItem(item)}
                </View>
              );
            }}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 14}} />}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.categoryListContent}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </Card>
      </View>
    );
  }
}

export default Category;
