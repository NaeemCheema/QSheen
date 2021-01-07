import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import {
  Header,
  Text,
  Touchable,
  Input,
  Button,
} from '../../components';
import {screens} from '../../config';
import {COLOR} from '../../constants';
import styles from './otp.styles';

class OTP extends Component {
  constructor(props) {
    super(props);

    this.otpBoxes = {};
    this.inputs = {};
    this.state = {
      otpCode: {
        0: '',
        1: '',
        2: '',
        3: '',
      },
    };

    this._onChangeText = this._onChangeText.bind(this);
    this._clearInput = this._clearInput.bind(this);
  }

  _onChangeText(code, index, callback) {
    this.setState({
      otpCode: {
        ...this.state.otpCode,
        [index]: code,
      }
    }, () => {
      callback && callback();
    });
  }

  _clearInput(index) {
    this.setState({
      otpCode: {
        ...this.state.otpCode,
        [index]: 0,
      }
    });
  }

  _addRef = fieldName => (input) => {
    try{
      this.inputs[fieldName] = input;
    }catch(err){
      console.log("LoginPage / addInput / " + err.message);
    }
  }

  _handleSubmit = () => {
    // this.props.navigation.navigate(screens.productDetails);
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' },
          // {
          //   name: 'Home',
          //   params: { user: 'jane' },
          // },
        ],
      }));
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header
          headerTitle={'OTP'}
          onbackPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.container}>
          <Text style={styles.heading}>{'Enter Code'}</Text>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              {'Please enter the 4- digit verification code sent to your phone +974 000 000 not the number? '}
              <Text
                onPress={() => {
                  alert('but this is');
                }}
                style={styles.underline}
              >
                Edit
              </Text>
            </Text>
          </View>
          <View style={styles.inputRow}>
            <Input
              ref={this._addRef('box1')}
              onFocus={() => this._clearInput(0)}
              maxLength={1}
              keyboardType='number-pad'
              placeholder={''}
              selectionColor={COLOR.BLACK}
              placeholderTextColor={COLOR.BLACK}
              containerStyles={styles.wrapper}
              style={styles.input}
              value={this.state.otpCode[0]}
              onChangeText={(text) => this._onChangeText(text, 0, () => this.inputs['box2'].input.focus())}
            />
             <Input
              ref={this._addRef('box2')}
              onFocus={() => this._clearInput(1)}
              maxLength={1}
              keyboardType='number-pad'
              placeholder={''}
              selectionColor={COLOR.BLACK}
              placeholderTextColor={COLOR.BLACK}
              containerStyles={styles.wrapper}
              style={styles.input}
              value={this.state.otpCode[1]}
              onChangeText={(text) => this._onChangeText(text, 1, () => this.inputs['box3'].input.focus())}
            />
            <Input
              ref={this._addRef('box3')}
              onFocus={() => this._clearInput(2)}
              maxLength={1}
              keyboardType='number-pad'
              placeholder={''}
              selectionColor={COLOR.BLACK}
              placeholderTextColor={COLOR.BLACK}
              containerStyles={styles.wrapper}
              style={styles.input}
              value={this.state.otpCode[2]}
              onChangeText={(text) => this._onChangeText(text, 2, () => this.inputs['box4'].input.focus())}
            />
            <Input
              ref={this._addRef('box4')}
              onFocus={() => this._clearInput(3)}
              maxLength={1}
              keyboardType='number-pad'
              placeholder={''}
              selectionColor={COLOR.BLACK}
              placeholderTextColor={COLOR.BLACK}
              containerStyles={styles.wrapper}
              style={styles.input}
              value={this.state.otpCode[3]}
              onChangeText={(text) => this._onChangeText(text, 3)}
            />
          </View>
          <Button
            buttonTitle={'Submit'}
            buttonStyles={styles.button}
            buttonTitleStyles={styles.buttonText}
            onPress={() => this._handleSubmit()}
          />
          <Text style={styles.didNotreceive}>{'Didn\'t Recieve Reset Code?'}</Text>
          <Touchable>
              <Text style={styles.resend}>{'RESEND CODE'}</Text>
          </Touchable>
        </View>
      </SafeAreaView>
    );
  }
}

export default OTP;
