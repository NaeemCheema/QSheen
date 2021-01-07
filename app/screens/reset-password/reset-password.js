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
import {COLOR} from '../../constants';
import styles from './reset-password.style';

class ResetPassword extends Component {
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
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerHeading}>{'Enter New Password*'}</Text>
            <Input
              placeholder={'Enter your Password'}
              placeholderTextColor={COLOR.TEXT_LIGHT}
              containerStyles={styles.wrapper}
              style={styles.input}
            />
            <Text style={styles.inputContainerHeading}>{'Enter New Password*'}</Text>
            <Input
              placeholder={'Enter your Password'}
              placeholderTextColor={COLOR.TEXT_LIGHT}
              containerStyles={styles.wrapper}
              style={styles.input}
            />
          </View>
          <Button
          buttonTitle={'RESET'}
          buttonStyles={styles.resetButton}
          buttonTitleStyles={styles.resetButtonTitle}
          onPress={()=>{}}
        />
        </View>
      </SafeAreaView>
    );
  }
}

export default ResetPassword;