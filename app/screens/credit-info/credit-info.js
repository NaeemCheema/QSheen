import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import CircleCheckBox from 'react-native-circle-checkbox';

import {
  Text,
  Button,
  Input,
  Header,
} from '../../components';
import {images, COLOR, width} from '../../constants';
import styles from './credit-info.styles';

class CreditInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savecard: true,
      billaddress: true,
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
          placeholder={'Pay'}
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
        <View style={styles.mainContainer}>
          <View style={styles.upperContainer}>
            <Image
              source={images.lock}
              style={styles.lockImage}
            />
            <Text style={styles.lockDetail}>{'Secure and Encrypted'}</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={images.logoA}
              style={styles.logoA}
              resizeMode='contain'
            />
            <Image
              source={images.logoB}
              style={styles.logoA}
              resizeMode='contain'
            />
            <Image
              source={images.logoC}
              style={styles.logoA}
              resizeMode='contain'
            />
          </View>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Card Number'}
            placeholderTextColor={COLOR.DESIGNER_LOC}
            underlineColorAndroid ='transparent'
            style={styles.input}
            onChangeText={(text) => {
            }}
          />
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Name on Card'}
            placeholderTextColor={COLOR.DESIGNER_LOC}
            underlineColorAndroid ='transparent'
            style={styles.input}
            onChangeText={(text) => {
            }}
          />
          <Input
            containerStyles={styles.inputExpiryContainer}
            placeholder={'Expiration Date (MM/YY)'}
            placeholderTextColor={COLOR.DESIGNER_LOC}
            underlineColorAndroid ='transparent'
            style={styles.input}
            onChangeText={(text) => {
            }}
          />
          <Input
            containerStyles={styles.inputCVCContainer}
            placeholder={'CVC'}
            placeholderTextColor={COLOR.DESIGNER_LOC}
            underlineColorAndroid ='transparent'
            style={styles.input}
            onChangeText={(text) => {
            }}
          />
        </View>
        <View style={styles.subOuterContainer}>
          <View style={styles.subInnerContainerOne}>
            <Text style={styles.innerTextHeading}>{'Save Card'}</Text>
            <Text style={styles.innerText}>{'For Future Purchases'}</Text>
          </View>
          <CircleCheckBox
            checked={this.state.savecard}
            onToggle={()=>{this.setState({ savecard: !this.state.savecard})}}
            outerColor ={COLOR.PROFILE_BG} 
            innerColor={COLOR.PROFILE_BG}
            outerColor={COLOR.WHITE}
            innerColor={COLOR.PROFILE_BG}
            filterColor={COLOR.Gray_PAYMENT}
            outerSize={28}
            innerSize={19}
            filterSize={19}
            styleCheckboxContainer={styles.styleCheckboxContainer}
          />
        </View>
        <View style={styles.subOuterContainer}>
          <View style={styles.subInnerContainer}>
            <Text style={styles.innerTextHeading}>{'Bill Address'}</Text>
            <Text style={styles.innerText}>{'Same as shipping information'}</Text>
          </View>
          <CircleCheckBox
            checked={this.state.billaddress}
            onToggle={()=>{this.setState({ billaddress: !this.state.billaddress})}}
            outerColor ={COLOR.PROFILE_BG} 
            innerColor={COLOR.PROFILE_BG}
            outerColor={COLOR.WHITE}
            innerColor={COLOR.PROFILE_BG}
            filterColor={COLOR.Gray_PAYMENT}
            outerSize={28}
            innerSize={19}
            filterSize={19}
            styleCheckboxContainer={styles.styleCheckboxContainer}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Image 
            source={images.secure}
            style={styles.secureImage}
          />
          <View style={styles.bottomTextView}>
            <Text style={styles.bottomText}>
              {'Qsheen Store is secure and your personal information is protected'}
            </Text>
          </View>
        </View>
        <Button
          buttonTitle={'CONFIRM'}
          buttonStyles={styles.confirm}
          buttonTitleStyles={styles.confirmTitle}
          onPress={()=>{}}
        />
      </ScrollView>
    );
  }
}

export default CreditInfo;
