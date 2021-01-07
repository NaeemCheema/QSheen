import React,{Component} from 'react';
import {
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Button, Text} from '../../../components';
import {screens} from '../../../config';
import {images, COLOR} from '../../../constants';
import styles from './step2.styles';

class Step2 extends Component {
  constructor(props) {
    super(props);
    this._onPressStep2 = this._onPressStep2.bind(this);
    this.props;
  }

  _onPressStep2() {
    this.props.navigation.replace(
      screens.step3
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <Image
          source={images.step2Image}
          style={styles.backgroundImage}
          resizeMode='stretch'
        />
        <View style={styles.contentContainer}>
          <Image
            source={images.logo_icon_group}
            style={styles.logo}
          />
          <Text
            style={styles.screenMessage}
          >
            Requesting for custom design has never been earsier
          </Text>
          <Button
            buttonStyles={styles.buttonStyles}
            onPress={this._onPressStep2}
            icon={<Icon name="arrowright" color={COLOR.WHITE} size={26} />}
          />
        </View>
      </View>
    );
  }
};

export default Step2;