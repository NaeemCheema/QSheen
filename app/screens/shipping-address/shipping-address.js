import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';
import _ from 'lodash';

import {
  Text,
  Button,
  Input,
  Card,
  Header,
} from '../../components';
import {screens} from '../../config';
import {COLOR} from '../../constants';
import styles from './shipping-address.style';

class ShippingAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saveAddress: true,
      showWarning: false,
      showPassword: false,
      form: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '12345',
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.checkoutData.data, this.props.checkoutData.data)) {
      console.log("success: ", this.props.checkoutData.data);
      this.props.navigation.navigate(screens.webView);
    }
  }

  _checkOut = () => {
    const { cartData, authData } = this.props;
    console.log("cartData: ", cartData.data, authData.data);
    if(cartData.data !== null && authData.data !== null){
      const param = {
        user_type: "customer",
        user_id: authData.data.ID,
        first_name: "Waseem",
        last_name: "Ashraf",
        country: "QR",
        street_address: "26c Doha Qatar Road",
        city: "Doha",
        state: "Doha",
        postcode: "30080",
        phone_number: "3164529017",
        email_address: authData.data.user_email,
        currency: "QAR",
        sub_total: cartData.data.sub_total,
        discount: cartData.data.discount,
        shipping: cartData.data.shipping,
        total: cartData.data.total,
        items: cartData.data.cart
      }
      this.props.fetchCheckoutRequest(param);
    }
  }

  render() {
    
    return (
      <ScrollView style={styles.screen}>
        <Header
          placeholder={'Shipping Address'}
          onSearchPress={() =>      
            this.props.navigation.navigate(screens.mainStack, {
              screen: screens.recommendations,
            })
          }
          onSubmitEditing={() => {    
            this.props.navigation.navigate(screens.mainStack, {
              screen: screens.searchresult,
            })
          }}
        />
        <Card style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'First Name *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              showWarning={this.state.showWarning}
              value={this.state.form.firstName}
              onChangeText={(text) => {
                this.setState({...this.state, form: {...this.state.form, firstName: text}});
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Last Name *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              showWarning={this.state.showWarning}
              value={this.state.form.lastName}
              onChangeText={(text) => {
                this.setState({...this.state, form: {...this.state.form, lastName: text}});
              }}
            />
            <View style={styles.mNumberContainer}>
              <View style={{marginRight:30}}>
                <Text style={styles.mNumberText}>
                  {'Local Number'}
                </Text>
                <View style={styles.mNumbervalueContainer}>
                  <Text style={styles.mNumbervalue}>
                      {'+974'}
                  </Text>
                </View>
              </View>
              <View style={{flex:1}}>
                <Input
                  containerStyles={styles.inputContainer}
                  placeholder={'Mobile Number *'}
                  placeholderTextColor={COLOR.SHIPPING_TEXT}
                  underlineColorAndroid ='transparent'
                  style={styles.input}
                  showWarning={this.state.showWarning}
                  value={this.state.form.phoneNumber}
                  onChangeText={(text) => {
                    this.setState({...this.state, form: {...this.state.form, phoneNumber: text}});
                  }}
                />
              </View>
            </View>
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Street Address *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'City *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'State *'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Country*'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <Input
              containerStyles={styles.inputContainer}
              placeholder={'Zip Code*'}
              placeholderTextColor={COLOR.SHIPPING_TEXT}
              underlineColorAndroid ='transparent'
              style={styles.input}
              onChangeText={(text) => {
              }}
            />
            <View style={styles.checkboxContainer}>
              <Checkbox
                name='saveAddress'
                checked={this.state.saveAddress}
                size={14}
                style={styles.checkbox}
                onChange={(name, checked) => {this.setState({ [name] : checked })}}
              />
              <Text style={styles.checkboxFont}>
                {'Save address'}
              </Text>
            </View>
          </View>
        </Card>
        <Button
          buttonTitle={'CONTINUE TO PAYMENT'}
          buttonStyles={styles.confirm}
          buttonTitleStyles={styles.confirmTitle}
          onPress={this._checkOut}
        />
      </ScrollView>
    );
  }
}

export default ShippingAddress;