import React,{Component} from 'react';
import {
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Button, Text} from '../../../components';
import {screens} from '../../../config';
import {data, COLOR} from '../../../constants';
import styles from './step1.style';

class Step1 extends Component {
  constructor(props) {
    super(props);
    this._onPressStep1 = this._onPressStep1.bind(this);
    this.props;
  }

  _onPressStep1() {
    this.props.navigation.replace(
      screens.step2
    );
  }
  
  render() {
    const step1 = data.step1;
    return (
    <View style={styles.screen}>
      <Image
        source={step1.step1Image}
        style={styles.backGroundImage}
      />
      <Image
        source={step1.step1Logo}
        style={styles.step1logoStyle}
      />
      <Button
        buttonStyles={styles.buttonStyles}
        onPress={this._onPressStep1}
        icon={<Icon name="arrowright" color={COLOR.WHITE} size={26} />}
      />
    </View> 
    );
  };
};

export default Step1;
