import React,{Component} from 'react';
import {
  View,
  Image,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Button} from '../../../components';
import {screens} from '../../../config';
import {images, COLOR} from '../../../constants';
import styles from './step3.styles';

class Step3 extends Component {
  constructor(props) {
    super(props);
    this._onPressStep3 = this._onPressStep3.bind(this);
  }

  _onPressStep3() {
    this.props.onboardingStepsComplete();
    this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{name:screens.sideMenu}] }));
  };

  render() {
    return (
      <View style={styles.screen}>
        <Image
          source={images.step3Image}
          style={styles.backgroundImage}
          resizeMode='stretch'
        />
        <View style={styles.contentContainer}>
          <Image
            source={images.step3Heading}
            style={styles.screenHeading}
            resizeMode='contain'
          />
          <Image
            source={images.step3SubHeading}
            style={styles.screenSubHeading}
            resizeMode='contain'
          />
          <Button
            buttonStyles={styles.buttonStyles}
            onPress={this._onPressStep3}
            icon={<Icon name="arrowright" color={COLOR.WHITE} size={26} />}
          />
        </View>
      </View>
    );
  }
};

export default Step3;