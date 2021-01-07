import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text
} from 'react-native';

import {COLOR} from '../../constants';
import {screens} from '../../config';
import {Header, Input, Touchable, Button, DropDownHolder} from '../../components';
import {WishlistTile} from './wishlist-tile/wishlist-tile';
import {DeleteWishlistItemPopup} from './delete-wishlist-item/delete-wishlist-item';
import styles from './wishlist.style';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible:false,
      modalData: null,
    };
  }
  
  componentDidMount() {
    const {authData} = this.props;
    if (authData.data) {
      this.props.fetchWishlistRequest({user_id: authData.data.ID});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {wishlistData} = this.props;
    if (prevProps.wishlistData.success == null && wishlistData.success) {
      DropDownHolder.alert('success', 'Success', cartData.success);
    } else if (prevProps.wishlistData.error == null && wishlistData.error) {
      DropDownHolder.alert('error', 'Error', wishlistData.error);
    }
  }

  deleteItem = () => {

    const {authData} = this.props;
    if(authData.data){
      const params = {
        user_id: authData.data.ID,
        variation_id: this.state.modalData.variation_id,
        product_id: this.state.modalData.product_id,
      };
      // this.props.deleteWishlistItemRequest(params);
    }
    
    this.setState({isModalVisible: false, modalData: null});
  }
  
  showConfirmationModal = (cartItem) => {
    this.setState({
      isModalVisible: true,
      modalData: cartItem,
    });
  }

  _renderCartItem = ({item}) => {
    return (
      <View style={styles.cardTileContainer}>
        <WishlistTile
          onPressDelete={this.showConfirmationModal}
          data={item}
        />
      </View>
    );
  }

  render() {
    const {wishlistData} = this.props;
    console.log("cartData: ", wishlistData);
    return (
      <View style={styles.container}>
        <Header
          placeholder={'Shopping Cart'}
          leftIconPress={() => this.props.navigation.openDrawer()}
          onSearchPress={() =>      
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.recommendations,
            })
          }
          onSubmitEditing={()=>{    
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.searchresult,
          })
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.cartScrollView}>
          <View style={styles.cartView}>
            <Text style={styles.sectionHeading}>CART</Text>
            <FlatList
              data={wishlistData.data !== undefined ? wishlistData.data.cart : []}
              showsVerticalScrollIndicator={false}
              renderItem={this._renderCartItem}
              numColumns={1}
              ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
              keyExtractor={(item, index) => String(index)}
              contentContainerStyle={{ marginBottom: 95 }}
            />
            <Button
              buttonTitle={'CHECKOUT'}
              buttonStyles={styles.CheckoutButton}
              buttonTitleStyles={styles.CheckoutButtonTitle}
              onPress={() => {this.props.navigation.navigate(screens.shippingaddress)}}
            />
          </View>
        </ScrollView>
        <DeleteWishlistItemPopup
          cartItem={this.state.modalData}
          isModalVisible={this.state.isModalVisible}
          onPressOk={()=>this.deleteItem()}
          onPressCancel={()=>this.setState({isModalVisible: false, modalData: null})}
        />
      </View>
    );
  }
}

export default Cart;