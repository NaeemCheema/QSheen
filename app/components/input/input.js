import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
} from 'react-native';

import { Touchable, Text } from '../';
import { COLOR } from '../../constants';
import styles from './input.styles';

class Input extends Component {
  render() {
    const showWarning = !this.props.value && this.props.showWarning;
    return (
      <View>
        {
          this.props.heading?
          <Text style={{ fontSize: 12, fontWeight: '300', color: '#3A333E' }}>{this.props.heading}</Text> : null
        }
        <View style={[
          styles.container,
          this.props.containerStyles,
          showWarning? { borderColor: COLOR.red } : null,
        ]}>
          {this.props.leftIcon?
          <Image source={this.props.leftIcon} style={this.props.leftIconStyles} />
          :
          null
          }
          <TextInput
            ref={ref => {
              if (this.props.addRef) {
                this.props.addRef(ref);
              } else {
                return this.input = ref;
              }
            }}
            // ref={ref => this.input = ref}
            underlineColorAndroid='transparent'
            placeholderTextColor={COLOR.BLACK}
            selectionColor={COLOR.BLACK}
            onSubmitEditing={this.props.onSubmitEditing}
            keyboardType = {this.props.keyboardType}
            onChangeText={this.props.onChangeText}
            {...this.props}
            style={[styles.input, this.props.style]}
          />
          {this.props.rightIcon && !this.props.onRightIconsPress?
          <Image source={this.props.rightIcon} style={[{ alignSelf: 'center' }, this.props.rightIconStyle]} />
          :
          this.props.rightIcon && this.props.onRightIconsPress?
          <Touchable
            onPress={() => this.props.onRightIconsPress()}
          >
            <Image source={this.props.rightIcon} style={[{ alignSelf: 'center' }, this.props.rightIconStyle]} />
          </Touchable>
          : null
          }
          {this.props.rightContent? this.props.rightContent.content : null}
        </View>
        {
          this.props.showWarning && !this.props.value?
          <Text style={styles.warningMessage}>This field cannot be empty.</Text> : null
        }
      </View>
    );
  }
}

export {Input};
