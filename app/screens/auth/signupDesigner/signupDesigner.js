import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

import {
  Text, Input, Touchable, Button,
} from '../../../components';
import { COLOR, images } from '../../../constants';
import styles from './signupDesigner.style';

class SignupDesigner extends Component {
  state = {
    design: false,
    terms: false,
  };
    
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.inputHeading}>{'First Name'}</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your First name'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ height: 14 }} />
        <View>
          <Text style={styles.inputHeading}>{'Second Name'}</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Second Name'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ height: 14 }} />
        <View>
          <Text style={styles.inputHeading}>{'Company Name'}</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Name of Your Compnany'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ height: 14 }} />
        <View>
          <Text style={styles.inputHeading}>{'Website or Instagram Username'}</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Website or Instagram Username'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ height: 14 }} />
        <View>
          <Text style={styles.inputHeading}>{'Mobile Number'}</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'+974 ---- ----'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ height: 14 }} />
        <View>
          <Text style={styles.inputHeading}>{'Email Address'}</Text>
          <Input
            containerStyles={styles.inputContainer}
            placeholder={'Enter your Email'}
            placeholderTextColor={COLOR.TEXT_LIGHT}
            style={styles.input}
          />
        </View>
        <View style={{ height: 14 }} />
        <View>
          <Text style={styles.inputHeading}>{'Price Range'}</Text>
          <View style={styles.priceRangeContainer}>
            <View>
              <Text style={styles.inputSubHeading}>{'From'}</Text>
              <Input
                containerStyles={styles.priceRangeInput}
                placeholder={'QAR'}
                placeholderTextColor={COLOR.TEXT_LIGHT}
                style={styles.input}
              />
            </View>
            <View style={{marginLeft:30}}>
              <Text style={styles.inputSubHeading}>{'To'}</Text>
              <Input
                containerStyles={styles.priceRangeInput}
                placeholder={'QAR'}
                placeholderTextColor={COLOR.TEXT_LIGHT}
                style={styles.input}
              />
            </View>
          </View>
        </View>
        <Button
          buttonTitle={'REGISTER'}
          buttonStyles={styles.SignButton}
          buttonTitleStyles={styles.SignButtonTitle}
        />
      </View>
    );
  }
}

export {SignupDesigner};
