import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import {
  Header,
  Text,
  Input,
  Button,
} from '../../components';
import {screens} from '../../config';
import {COLOR} from '../../constants'
import styles from './reset-email.style';

class ResetEmail extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header
          onSearchPress={() =>      
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.recommendations,
          })}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.heading}>{'Reset Password'}</Text>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              {'Enter your email addreess or mobile and we will send you link or code to reset password'}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerHeading}>{'Enter Email Address or Phone Number'}</Text>
            <Input
              placeholder={'myemail@gmail.com'}
              placeholderTextColor={COLOR.TEXT_LIGHT}
              containerStyles={styles.wrapper}
              style={styles.input}
            />
          </View>
          <Button
          buttonTitle={'RESET PASSWORD'}
          buttonStyles={styles.resetButton}
          buttonTitleStyles={styles.resetButtonTitle}
          onPress={()=>{this.props.navigation.navigate(screens.resetpassword)}}
        />
        </View>
      </SafeAreaView>
    );
  }
}

export default ResetEmail;