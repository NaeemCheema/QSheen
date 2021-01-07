import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import CircleCheckBox from 'react-native-circle-checkbox';

import {screens} from '../../config';
import {
  Text,
  Button,
  Header,
} from '../../components';
import {images, COLOR, width} from '../../constants';
import styles from './payment.styles';

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creditdebit: true,
      paypal: false,
      cash: false,
    };
  }
  render() {
    return (
      <ScrollView 
        style={styles.screen}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Header
          placeholder ={'Payment Method'}
        />
        <View style={styles.headerContainer}>
          <Image
            style={styles.paymentHeader}
            source={images.payment_header}
          />
          <View style={styles.paymentInfo}>
            <Text style={styles.order}>
              {'Order 0015110'}
            </Text>
            <Text style={styles.price}>
              {'QAR 2,520'}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subText}>Pay with Card</Text>
          <View style={styles.subOuterContainer}>
            <View style={styles.subInnerContainerOne}>
              <CircleCheckBox
                checked={this.state.creditdebit}
                onToggle={()=>{this.setState({ creditdebit: !this.state.creditdebit,  paypal: false, cash: false})}}
                innerColor={COLOR.PROFILE_BG}
                outerColor={COLOR.WHITE}
                innerColor={COLOR.PROFILE_BG}
                filterColor={COLOR.Gray_PAYMENT}
                outerSize={28}
                innerSize={19}
                filterSize={19}
                styleCheckboxContainer={styles.styleCheckboxContainer}
              />
              <Image 
                source={images.credit_card}
                style={styles.credit}
              />
            </View>
            <View style={styles.subInnerContainerTwo}>
              <Text style={styles.innerTextHeading}>{'New Credit/Debit Card'}</Text>
              <Text style={styles.innerText}>{'We Accept Visa and Mastercard'}</Text>
            </View>
          </View>
          <Text style={styles.subText}>Other Payment Method</Text>
          <View style={styles.subOuterContainer}>
            <View style={styles.subInnerContainerOne}>
              <CircleCheckBox
                checked={this.state.paypal}
                onToggle={()=>{this.setState({ paypal: !this.state.paypal, cash: false, creditdebit: false })}}
                outerColor={COLOR.WHITE}
                innerColor={COLOR.PROFILE_BG}
                filterColor={COLOR.Gray_PAYMENT}
                outerSize={28}
                innerSize={19}
                filterSize={19}
                styleCheckboxContainer={styles.styleCheckboxContainer}
              />
              <Image 
                style={styles.paypalImage}
                source={images.paypal}
              />
            </View>
            <View style={styles.subInnerContainerTwo}>
                <Text style={styles.innerTextHeading}>{'Paypal'}</Text>
                <Text style={styles.innerText}>{'You will be redirected to Paypal after placing your order'}</Text>
            </View>
          </View>
          <View style={{ height: 10}}/>
          <View style={styles.subOuterContainer}>
            <View style={styles.subInnerContainerOne}>
              <CircleCheckBox
                checked={this.state.cash}
                onToggle={()=>{this.setState({ cash: !this.state.cash, creditdebit: false, paypal:false })}}
                outerColor={COLOR.WHITE}
                innerColor={COLOR.PROFILE_BG}
                filterColor={COLOR.Gray_PAYMENT}
                outerSize={28}
                innerSize={19}
                filterSize={19}
                styleCheckboxContainer={styles.styleCheckboxContainer}
              />
              <Image 
                source={images.cash}
                style={styles.cashImage}
              />
            </View>
            <View style={styles.subInnerContainerTwo}>
              <Text style={styles.innerTextHeading}>{'Cash On Delivery'}</Text>
            </View>
          </View>
        </View>
        <Button
          buttonTitle={'CONFIRM'}
          buttonStyles={styles.confirm}
          buttonTitleStyles={styles.confirmTitle}
          onPress={()=>{this.props.navigation.navigate(screens.creditinfo)}}
        />
      </ScrollView>
    );
  }
}

export default Payment;
