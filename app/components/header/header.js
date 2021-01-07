import React, { Component} from 'react';
import {
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import {
  Text,
  Touchable,
  Input,
} from '../../components';
import {images, COLOR} from '../../constants';
import styles from './header.styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      onfocus: true,
    };
  }

  render() {
    const {
      leftIcon,
    } = this.props;
    return (
      <SafeAreaView style={[styles.safeArea, this.props.headerContainer, this.props.absolute? styles.absoluteStyles : null]}>
        <View style={styles.headerContainer}>
          <Touchable
            onPress={this.props.leftIconPress}
            style={styles.leftContainer}
          >
            <Image 
              source={leftIcon? leftIcon : images.drawer}
              resizeMode='center'
              style={styles.leftIconsContainer}
            />
          </Touchable>
          {
            this.props.title?
            <Text style={styles.headerTitle}>
              {this.props.title}
            </Text>
            :
            this.props.search?
            <Input
              containerStyles={styles.searchContainer}
              style={styles.searchText}
              placeholder={'Search'}
              placeholderTextColor={COLOR.BLACK}
              onChangeText={()=>{}}
              addRef={(input) => {this.TextInput = input}}
              onSubmitEditing={this.props.onSubmitEditing}
              onFocus={() => this.setState({onfocus : false})}
              onBlur={() => this.setState({onfocus : true})} 
              blurOnSubmit={false}
            />
            : null
          }
          <View style={styles.rightContainer}>
            {
              this.props.onSearchPress?
              <Touchable
                onPress={this.props.onSearchPress}
              >
                <Image
                  source={images.search}
                  style={styles.searchIcon}
                />
              </Touchable> : null
            }
            <Touchable>
              <ImageBackground
                source={images.notification} 
                style={styles.notify}
              >
                {this.state.counter ?
                <View style={styles.notificationTextView}>
                  <Text style={styles.notificationText}>
                    {this.state.counter}
                  </Text>
                </View>
                :null}
              </ImageBackground>
            </Touchable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export {Header};
