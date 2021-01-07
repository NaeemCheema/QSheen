import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';

import {
  Header,
  Touchable,
  Text,
  Spinner,
  DropDownHolder,
} from '../../components';
import {COLOR, images, width, height} from '../../constants';
import {screens} from '../../config';
import {Login} from './login';
import {Signup} from './signup';
import styles from './auth.styles';
import { SignupDesigner } from './signupDesigner';
import AsyncStorage from '@react-native-community/async-storage';

let authType = {
  LOGIN: 'LOG IN',
  SIGNUP: 'SIGN UP',
  DESIGNER: 'DESIGNER',
}

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAuthType: authType.LOGIN,
      showSocialAuthOptions: false,
    };

    this._onPressAuthType = this._onPressAuthType.bind(this);
    this._loginUser = this._loginUser.bind(this);
    this._signUpUser = this._signUpUser.bind(this);
  }

  componentDidUpdate() {
    if (this.props.authData.error) {
      DropDownHolder.alert('error', 'Error', this.props.authData.error);
    }

    const {authData, route} = this.props;
    if (authData.data && authData.sign_up_success) {

    } else if (authData.data) {
      if (route) {
        console.log("authData: ", authData);
        route.params.callback && route.params.callback();
        route.params.resetTo && this.props.navigation.navigate(route.params.resetTo);
      }
    }
  }

  _onPressAuthType(type) {
    if (this.state.selectedAuthType != type) this.setState({selectedAuthType: type});
  }

  _loginUser(params) {
    console.log('params',params);
    const user_params = {
      "username": params.email,
      "password": params.password,
      "rememberMe": params.rememberMe
    };
    this.props.userLoginRequest(user_params);
  }

  _signUpUser(params, agree_terms) {
    const user_params = {
      "username": params.email,
      "password": params.password,
      "password_confirmation": params.confirmPassword,
      "name": params.username,
    };

    if (user_params.password !== user_params.password_confirmation) {
      DropDownHolder.alert('error', 'Error', 'Passwords do not match.');
    } if (!agree_terms) {
      DropDownHolder.alert('error', 'Error', 'Please Agree to our terms and conditions also.');
    } else {
      this.props.userSignupRequest(user_params);
    }
  }
  async UNSAFE_componentWillMount() {
    var user_id = await AsyncStorage.getItem('user_id', null);
    console.log('user_id',user_id);
    if(user_id != undefined && user_id !=null){
        this.props.navigation.navigate("Profile",{
          alreadyLoggedIn:true
        });
    }
  }
  render() {
    const {selectedAuthType} = this.state;
    const {authData} = this.props;
    return (
      <View style={styles.screen}>
        {authData.requesting? <Spinner color={COLOR.PRIMARY_COLOR} fullScreenTransparentOverlay /> : null}
        <ScrollView
          style={styles.screen}
          contentContainerStyle={{paddingBottom: 20}}>
          <Image
            source={images.login_cover}
            style={styles.coverImage}
            resizeMode= 'stretch'
          />
          <View style={styles.authTypeContainer}>
            <Touchable onPress={()=> this._onPressAuthType(authType.LOGIN)}>
              <View style={styles.itemContainer}>
              <Text style={[
                  styles.authItemText,
                  selectedAuthType != authType.LOGIN? { color: COLOR.TEXT_GRAY } : null
                ]}>
                  {authType.LOGIN}
                </Text>
                { (selectedAuthType == authType.LOGIN) &&
                    <View style={[styles.highlighter, styles.selectedAuthBar]} />
                }
              </View>
            </Touchable>

            <Touchable onPress={()=> this._onPressAuthType(authType.SIGNUP)}>
              <View style={styles.itemContainer}>
                <Text style={[
                  styles.authItemText,
                  selectedAuthType != authType.SIGNUP && selectedAuthType != authType.DESIGNER? { color: COLOR.TEXT_GRAY } : null
                ]}>
                  {authType.SIGNUP}
                </Text>
                { (selectedAuthType == authType.SIGNUP || selectedAuthType == authType.DESIGNER) &&
                    <View style={[styles.highlighter, styles.selectedAuthBar]} />
                }
              </View>
            </Touchable>
          </View>
          {
            selectedAuthType === authType.LOGIN?
            <Login
              loginPress={this._loginUser}
              navigation={this.props.navigation}
            />:
            selectedAuthType === authType.SIGNUP?
            <Signup
              selectDesignerSignup={() => this.setState({ selectedAuthType: authType.DESIGNER })}
              navigation={this.props.navigation}
              handleUserSignup={this._signUpUser}
            />:
            selectedAuthType === authType.DESIGNER?
            <SignupDesigner
              navigation={this.props.navigation}
             />:
            null
          }
          {/*
            this.state.showSocialAuthOptions && selectedAuthType !== authType.DESIGNER?
            <View style={[
              styles.socialAuthContainer,
              this.state.selectedAuthType == authType.LOGIN ? {marginTop: height * 0.08} : {marginTop: 25} 
            ]}>
              <Text style={styles.socialAuthHeader}>{'Or Join With'}</Text>
              <View style={styles.authIconsContainer}>
                <Touchable style={[styles.socialIconContainer, { marginRight: 30 }]}>
                  <Image source={images.fbIcon} style={styles.socialIcon} resizeMode={'contain'} />
                </Touchable>
                <Touchable style={styles.socialIconContainer}>
                  <Image source={images.googleIcon} style={styles.socialIcon} resizeMode={'contain'} />
                </Touchable>
              </View>
            </View> : null
          */}
        </ScrollView>
      </View>
    );
  }
}

export default Auth;
