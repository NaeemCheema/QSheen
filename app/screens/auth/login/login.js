import React, {Component} from 'react';
import {
  Alert,
  View,
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

import {
  Text, Input, Touchable, Button,
} from '../../../components';
import {screens} from '../../../config';
import {COLOR, images} from '../../../constants';
import styles from './login.styles';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rememberMe: false,
      showWarning: false,
      showPassword: false,
      form: {
        email: 'muhammadnaeemashiq6@gmail.com',
        password: '12345',
      },
    };

    this._handleHandleLogin = this._handleHandleLogin.bind(this);
  }

  _handleHandleLogin() {
    const { form,rememberMe } = this.state;
    if (form.email.length == 0 || form.password.length == 0) {
      this.setState({
        showWarning: true,
      });
    } else {
      this.props.loginPress({
        email: form.email,
        password: form.password,
        rememberMe: rememberMe
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.inputHeading}>Email Address</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your email address'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
            showWarning={this.state.showWarning}
            value={this.state.form.email}
            onChangeText={(text) => {
              this.setState({...this.state, form: {...this.state.form, email: text}});
            }}
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
            value={this.state.form.password}
            onChangeText={(text) => {
              this.setState({...this.state, form: {...this.state.form, password: text}});
            }}
            secureTextEntry={!this.state.showPassword}
          />
        </View>
        <Touchable
          onPress={() => {this.props.navigation.navigate(screens.resetemail)}}
          style={styles.forgotPWCont}
        >
          <Text style={styles.forgotPW}>Forgot Password?</Text>
        </Touchable>
        <Button
          buttonTitle={'LOG IN'}
          buttonStyles={styles.loginButton}
          buttonTitleStyles={styles.loginButtonTitle}
          onPress={this._handleHandleLogin}
        />
        <View style={styles.rememberMeContainer}>
          {/* <Touchable>
            <Image source={images.square} />
          </Touchable> */}
          <Checkbox
            name='rememberMe'
            checked={this.state.rememberMe}
            size={18}
            style={styles.checkbox}
            onChange={(name, checked) => {this.setState({ [name] : checked })}}
          />
          <Text style={styles.rememberMeText}>{'Remember Me'}</Text>
        </View>
      </View>
    );
  }
}

export {Login};
