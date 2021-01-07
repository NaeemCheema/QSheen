import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
} from 'react-native';

import {
  Header,
  Text,
  Slider,
  Card,
  Touchable,
  ProductTile
} from '../../components';
import {screens, STORAGE_URL} from '../../config';
import {images} from '../../constants';
import styles from './category-detail.style';

class CategoryDetail extends Component {

  constructor(props) {
    super(props);
    const { params } = this.props.route;

    this._handleBackPress = this._handleBackPress.bind(this);
  }


  async componentDidMount() {
    const category = this.props.route.params.item;
    console.log('category: ', category);
    if(category && category.title){
      this.props.fetchProductsByCategoriesRequest(category);
    }
  }

  _handleBackPress() {
    this.props.navigation.goBack();
  }

  _sliderContent = () => {
    const {productsData} = this.props;
    return productsData.data ? productsData.data.map((item, index) => {
      return (
        <Image
          key={index}
          source={{uri: STORAGE_URL+'products/'+item.cover_img}} 
          style={styles.sliderCategory}
          resizeMode= 'cover'
        />
      );
    }) : [];
  }
  
  render() {
    const category = this.props.route.params.item;
    const {productsData} = this.props;
    console.log('productsData: ', productsData);
    return (
      <View style={styles.screen}>
        <Header
          leftIcon={images.back}
          leftIconPress={this._handleBackPress}
          title={productsData.name}
        />
        {productsData.data !== null && productsData.data.length !== 0 &&
          <View style={styles.listContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                  data={productsData.data}
                  renderItem={(item) => (
                    <View style={{ width: '50%', alignItems: 'center' }}>
                      <ProductTile item={item.item}
                        onPress={() => this.props.navigation.navigate(screens.productDetails, {
                          product: item.item,
                        })}
                      />
                    </View>
                  )}
                  numColumns={2}
                  ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
                  keyExtractor={(item, index) => String(index)}
                  contentContainerStyle={{paddingBottom: 43}}
                  showsVerticalScrollIndicator={false}
                  bounces={false}
              />
              <Slider
                sliderContainerStyles={styles.sliderContainer}
                renderedContent={this._sliderContent}
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
              />
              <FlatList
                data={productsData.data}
                renderItem={(item) => (
                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <ProductTile 
                      item={item.item}
                      onPress={() => this.props.navigation.navigate(screens.productDetails, {
                        product: item,
                      })}
                    />
                  </View>
                )}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 13.5 }} />}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={{marginTop: 14.5 ,paddingBottom:25}}
                showsVerticalScrollIndicator={false}
                bounces={false}
              />
              {productsData.data !== null && productsData.data.length !== 0 && 
                <Touchable>
                  <Card style={styles.loadMoreContainer}>
                    <Text style={styles.loadmoreText}>{'Load More'}</Text>
                    <View style={styles.iconLoadMoreAlign}>
                      <Image style={styles.iconLoadMore} source={images.chevron} />
                    </View>         
                  </Card>
                </Touchable>
              }
            </ScrollView>
          </View>
        }
        {productsData.data !== null && productsData.data.length === 0 && 
          <View style={styles.upperContainer}>
            <Text style={styles.heading}>{'Oops nothing found'}</Text>
            <Image style={styles.image} source={images.sorry}/>
            <Text style={styles.subHeading}>
              {'Try to search new Item or check your spelling'}
            </Text>
          </View>
        }
      </View>
    );
  }
}

export default CategoryDetail;
