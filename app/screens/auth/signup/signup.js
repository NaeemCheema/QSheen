import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

import {
  Text, Input, Touchable, Button,
} from '../../../components';
import {screens} from '../../../config';
import { COLOR, images } from '../../../constants';
import {SignupDesigner} from '../signupDesigner'
import styles from './signup.style';

class Signup extends Component {
  state = {
    design: false,
    terms: false,
    showWarning: false,
    showPassword: false,
    showConfirmPassword: false,
    values: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  };

  constructor(props) {
    super(props);

    this._handleHandleSignup = this._handleHandleSignup.bind(this);
  }

  _handleHandleSignup() {
    const { values } = this.state;
    if (
      values.email.length == 0 
      || values.password.length == 0
      || values.confirmPassword.length == 0
      || values.username.length == 0
    ) {
      this.setState({
        showWarning: true,
      });
    } else {
      this.props.handleUserSignup(values, this.state.terms);
    }
  }

  render() {
    const {values} = this.state;
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.inputHeading}>Email Address or Phone Number</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your email address or Phone Number'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
            showWarning={this.state.showWarning}
            value={values.email}
            onChangeText={(text) => this.setState({ values: { ...values, email: text } })}
          />
        </View>
        <View style={{ height: 19 }} />
        <View>
          <Text style={styles.inputHeading}>Username</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your user name'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
            showWarning={this.state.showWarning}
            value={values.username}
            onChangeText={(text) => this.setState({ values: { ...values, username: text } })}
          />
        </View>
        <View style={{ height: 19 }} />
        <View>
          <Text style={styles.inputHeading}>Password</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your Password'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
            rightIcon={this.state.showPassword? images.eye : images.eyeOff}
            onRightIconsPress={()=> this.setState({ showPassword: !this.state.showPassword })}
            showWarning={this.state.showWarning}
            secureTextEntry={!this.state.showPassword}
            value={values.password}
            onChangeText={(text) => this.setState({ values: { ...values, password: text } })}
          />
        </View>
        <View style={{ height: 19 }} />
        <View>
          <Text style={styles.inputHeading}>Confirm Password</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your Password'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
            rightIcon={this.state.showConfirmPassword? images.eye : images.eyeOff}
            onRightIconsPress={()=> this.setState({ showConfirmPassword: !this.state.showConfirmPassword })}
            secureTextEntry={!this.state.showConfirmPassword}
            showWarning={this.state.showWarning}
            value={values.confirmPassword}
            onChangeText={(text) => this.setState({ values: { ...values, confirmPassword: text } })}
          />
        </View>
        <View style={{ height: 19 }} />
        {/*<View style={styles.signDesignerContainer}>
          <Checkbox
            name='design'
            checked={this.state.design}
            size={18}
            style={styles.checkbox}
            onChange={(name, checked) => {this.props.selectDesignerSignup()}}
          />
          <Text style={styles.designerText}>{'Sign Up as A Designer'}</Text>
        </View>*/}
        <Button
          buttonTitle={'SIGN UP'}
          buttonStyles={styles.SignButton}
          buttonTitleStyles={styles.SignButtonTitle}
          onPress={this._handleHandleSignup}
          // onPress={()=>{this.props.navigation.navigate(screens.otp)}}
        />
        <View style={styles.termsContainer}>
          <Checkbox
            name='terms'
            checked={this.state.terms}
            size={18}
            style={styles.checkbox}
            onChange={(name, checked) => {this.setState({ [name] : checked })}}
          />
          <Text style={styles.termsText}>{'By joining, you agree to our '}</Text>
          <Touchable style={styles.condition}>
            <Text style={styles.conditionText}>{'Terms and Conditions'}</Text>
          </Touchable>    
        </View>
      </View>
    );
  }
}

export {Signup};
