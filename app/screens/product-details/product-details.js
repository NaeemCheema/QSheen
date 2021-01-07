import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import _ from 'lodash';

import {
  Header,
  Text,
  Touchable,
  Segment,
  Button,
  Spinner,
  Slider,
  DropDownHolder,
} from '../../components';
import { screens, STORAGE_URL } from '../../config';
import { images, getPercentageWidth, getPercentageHeight, COLOR } from '../../constants';
import Reviews from './reviews';
import Measurements from './measurements';
import RelatedProducts from './related-products';
import styles from './product-details.styles';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 'QR 150',
      productName: 'Product Name',
      description: 'Lorem Ipsum doesn’t exist because people think the content is meaningless window dressing, only there to be decorated by designers who can’t be bothered to read. Lorem Ipsum exists because words.',
      showSizesPopup: false,
      segment: {
        segmentTitles: [
          'Description',
          'Designed by'
        ],
        selectedSegment: 0,
      },
      colors: {
        availableColors: [
          { value: COLOR.RED, name: 'RED' },
          { value: COLOR.GRAY, name: 'GRAY' },
          { value: COLOR.BLACK, name: 'BLACK' },
          { value: 'purple', name: 'PURPLE' }
        ],
      },
      userColorsSelections: {
        colors: []
      },

      materials: {
        availableMaterials: [
          { value: 'purple', name: 'PURPLE' },
          { value: COLOR.TEXT_PINK, name: 'PINK' },
          { value: COLOR.RED, name: 'RED' },
          { value: COLOR.GRAY, name: 'GRAY' },
        ],
      },
      userMaterialsSelections: {},

      isModalVisible: false,
      Burst: 0,
      BaseWidth: 0,
      Arm: 0,
      Hips: 0,
      SleeveLength: 0,
      Length: 0,
      ErrorMessage: ""
    };
    this._handleSegmentPress = this._handleSegmentPress.bind(this);
  }

  componentDidMount() {
    const {params} = this.props.route;
    this.props.fetchProductDetailsRequest({ product_id: params.product.id });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.userData.measurements, this.props.userData.measurements)) {
      DropDownHolder.alert('success', 'Success', this.props.userData.success);
    }
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  validateMeasurements = () => {
    const { Burst, BaseWidth, Arm, Hips, SleeveLength, Length } = this.state;
    console.log(this.state);
    if (Burst <= 0 || BaseWidth <= 0 || Arm <= 0 || Hips <= 0 || SleeveLength <= 0 || Length <= 0) {
      this.setState({
        ErrorMessage: "Please select all values."
      });
    } else {
      this.setState({
        ErrorMessage: ""
      });
    }
  }

  _handleSegmentPress(index) {
    if (index == 1) {
    }
  }

  _saveMeasurements = (measurements) => {
    this.toggleModal();

    const callback = () => {
      const { authData } = this.props;

      measurements.user_id = authData.data.id;

      this.props.addMeasermentsRequest(measurements);
    }

    const {authData} = this.props;
    if (authData.data) {
      callback();
    } else {
      this.props.navigation.navigate(screens.mainStack, {
        screen: screens.auth,
        params: {
          callback,
          resetTo: screens.productDetails,
        },
      });
    }
  }

  _addToCart = () => {
    const {productsData: {productDetails}, authData} = this.props;
    
    const callback = () => {
      const {authData} = this.props;
      console.log("productDetails: ", productDetails.variations);
      console.log("authData: ", authData.data);
      console.log("colors: ", this.state.userColorsSelections.selectedColorData);
      const params = {
        product_id: productDetails.details.id,
        user_id: authData.data.ID,
        material_id: this.state.userMaterialsSelections.material !== undefined ? this.state.userMaterialsSelections.material.term_id : 0,
        color_id: this.state.userColorsSelections.selectedColorData !== undefined ? this.state.userColorsSelections.selectedColorData : 0,
        size_id: 0,
        price: this.state.userColorsSelections.selectedColorData !== undefined ? this.state.userColorsSelections.selectedColorData.price : 0,
        qty: 1,
        variation_id: this.state.userColorsSelections.selectedColorData !== undefined ? this.state.userColorsSelections.selectedColorData.variation_id : 0,
      };
      this.props.addToCartRequest(params);
    }
    if (authData.data) {
      callback();
    } else {
      this.props.navigation.navigate(screens.mainStack, {
        screen: screens.auth,
        params: {
          callback,
          resetTo: screens.productDetails,
        },
      });
    }
  }

  _renderGivenColors = () => {
    console.log("this.state.userColorsSelections.selectedColor: ", this.state.userColorsSelections);
    return (
      <View style={styles.selectColorsContainer}>
        <View style={styles.colorContainer}>
          {
            this.state.userColorsSelections !== undefined && this.state.userColorsSelections.colors.map((color, index) => (
              <View key={index}>
                <Touchable
                  onPress={() => {
                    this.setState({
                      userColorsSelections: {
                        ...this.state.userColorsSelections,
                        selectedColor: index,
                        selectedColorData: color,
                      }
                    })
                  }}
                  style={[styles.color, { backgroundColor: color.color }]}
                >

                  {this.state.userColorsSelections.selectedColor == index ? <Image source={images.check} style={styles.checkStyles} resizeMode='contain' /> : null}
                </Touchable>
              </View>
            ))
          }
          {
            this.state.userColorsSelections.colors.length === 0 && this.state.colors.availableColors.map((color, index) => (
              <View key={index}>
                <Touchable
                  onPress={() => {
                    this.setState({
                      userColorsSelections: {
                        ...this.state.userColorsSelections,
                        selectedColor: index
                      }
                    })
                  }}
                  style={[styles.color, { backgroundColor: color.value }]}
                >

                  {
                    this.state.userColorsSelections.selectedColor == index ? <Image source={images.check} style={styles.checkStyles} resizeMode='contain' /> : null
                  }
                </Touchable>
              </View>
            ))
          }
        </View>
      </View>
    );
  }

  _renderGivenMaterials = (brands) => {
    return (
      <View style={styles.selectColorsContainer}>
        <View style={styles.colorContainer}>
          {
            brands.map((material, index) => (
              <View key={index}>
                <Touchable
                  onPress={() => {
                    this.setState({
                      userMaterialsSelections: {
                        material: material,
                        selectedMaterial: index,
                        selectedColors: material.child
                      }, 
                      userColorsSelections: {
                        colors: material.child,
                      }
                    })
                  }}
                  style={[styles.color, { backgroundColor: material.color !== "" ? material.color : '#000000' }]}
                >

                  {
                    this.state.userMaterialsSelections.selectedMaterial == index ? <Image source={images.check} style={styles.checkStyles} resizeMode='contain' /> : null
                  }
                </Touchable>
              </View>
            ))
          }
        </View>
      </View>
    );
  }

  _handleWishlistPress = (product) => {
    const {authData} = this.props;
    console.log("product: ", product, "authData: ", authData.data);
    if(authData.data){
      const params = {
        user_id: authData.data.ID,
        product_id: product.id,
      }
      this.props.addToWishlistRequest(params);
    }
  }

  render() {
    const {productsData, userData} = this.props;
    const {params} = this.props.route;
    

    if (productsData.requesting) {
      return this._renderLoadingScreen();
    }
    var productDetails = {}, similarProducts = [], imageSlider = [], material = [], designer= '';
    if (productsData.productDetails) {
      
      imageSlider = productsData.productDetails.imageSlider;
      productDetails = productsData.productDetails.details;
      similarProducts = productsData.productDetails.similarProducts;
      material = productsData.productDetails.variations;
      designer = productsData.productDetails.designer;
    }
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header
          onSearchPress={() => alert('asds')}
          title={productDetails.name}
          leftIcon={images.back}
          leftIconPress={() => this.props.navigation.goBack()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.productScrollView}>
          <View style={{ marginTop: getPercentageHeight(30), marginBottom: getPercentageHeight(5), marginLeft: getPercentageWidth(5), flexDirection: 'row' }}>
            <AirbnbRating
              type='star'
              selectedColor={COLOR.TEXT_PINK}
              count={5}
              showRating={false}
              defaultRating={5}
              size={14}
              starStyle={{ margin: 2 }}
            />
            <Text style={{ color: COLOR.REVIEW_TEXT_1 }}> (No reviews)</Text>
          </View>
          <View styles={{ justifyContent: 'center' }}>
            <Slider
              content={_.map(imageSlider, image => image)}
              sliderContainerStyles={styles.sliderImageContainer}
              sliderImageStyles={styles.sliderImage}
            />
            <View style={styles.codeContainer}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <Text style={styles.Code}>QR {productDetails.price}</Text>
              </View>
              <Touchable style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => this._handleWishlistPress(productDetails)}>
                <Image style={styles.heart} source={images.heartProd} resizeMode='contain' />
              </Touchable>
            </View>
            <View style={styles.ProductNameContainer}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <Text style={styles.ProdNameText}>{productDetails.name}</Text>
              </View>
            </View>
            <Segment
              segmentStyles={styles.segmentContainer}
              segmentItemStyle={styles.segmentItemStyle}
              activeBorderColor={'black'}
              perIndexStyle={{
                1: { flex: 2, alignItems: 'flex-end' },
              }}
              segmentText={{
                fontSize: 14,
              }}
              segmentElements={this.state.segment.segmentTitles}
              designerName={designer}
              selectedSegment={this.state.segment.selectedSegment}
              onPress={this._handleSegmentPress}
            >
              <View style={styles.segmentContentContainer} key={0}>
                <Text style={styles.descriptionText}>
                  {productDetails.description !== undefined ? productDetails.description : productDetails.short_description}
                </Text>
              </View>
              <View key={1} />
            </Segment>
            <Touchable style={styles.takeMeasurementsContainer} onPress={() => this.toggleModal()}>
              <View style={styles.flexOneCenter}>
                <Image source={images.measurements} style={styles.measurementsStyles} resizeMode='contain' />
              </View>
              <View style={styles.flexOneCenter}>
                {
                  userData.measurements?
                  <Text>Edit Measurements</Text>
                  :
                  <Text>Take Measurements</Text>
                }
              </View>
              <View style={styles.flexOneCenter}>
                <Image source={images.rightArrow} style={styles.rightArrow} resizeMode='contain' />
              </View>
            </Touchable>
            <View style={{ marginTop: getPercentageHeight(17) }}>
              <Text style={styles.colorHeading}>Select Material</Text>
              {this._renderGivenMaterials(material)}
            </View>
            <View style={{ marginTop: getPercentageHeight(17) }}>
              <Text style={styles.colorHeading}>Select Color</Text>
              {this._renderGivenColors()}
            </View>

            <Button
              buttonStyles={styles.button}
              buttonTitle={'ADD TO CART'}
              buttonTitleStyles={styles.buttonTitle}
              rightIcon={<Image source={images.cart} style={{width: getPercentageWidth(19), height:getPercentageHeight(24)}} resizeMode='contain' />}
              onPress={this._addToCart}
            />
          </View>
          <RelatedProducts
            productsData={{data: similarProducts}}
          />
          <Reviews />
        </ScrollView>
        <Measurements
          navigation={this.props.navigation}
          visible={this.state.isModalVisible}
          toggleModal={() => this.toggleModal()}
          validateMeasurements={() => this.validateMeasurements()}
          saveMeasurements={this._saveMeasurements}
        />
      </View>
    );
  }

  _renderLoadingScreen = () => {
    const {params} = this.props.route;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header
          onSearchPress={() => alert('asds')}
          title={params.product.name}
          leftIcon={images.back}
          leftIconPress={() => this.props.navigation.goBack()}
        />
        <Spinner fullScreenTransparentOverlay />
      </View>
    );
  }
}

export default ProductDetails;
