import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
} from 'react-native';

import {
  Text,
  Card,
  Touchable,
  Header,
} from '../../components';
import {screens} from '../../config';
import {images, data} from '../../constants';
import styles from './filter_result.style';

class FilterResult extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {recommendations} = data;
    return (
      <View style={styles.screen}>
        <Header
          placeholder={'Filter Results'}
          onSearchPress={() =>      
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.recommendations,
            })
          }
          onSubmitEditing={()=>{    
            this.props.navigation.navigate(screens.mainStack, {
            screen: screens.searchresult,
          })
          }}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.heading}>{'Filter Results'}</Text>
          <View style={styles.upperInnerContainer}>
            <Touchable 
              style={styles.searchUpperSetting}
              onPress={() =>      
                this.props.navigation.navigate(screens.mainStack, {
                screen: screens.sortresult,
              })}
            >
              <Text style={styles.highlightedText}>{'REFINE YOUR SEARCH'}</Text>
              <Image 
                source={images.chevron_up}
                style={styles.chevronUp}
                />
            </Touchable>
            <Touchable
             style={styles.searchDownSetting}
            >
              <View/>
              <Text style={styles.nonHighlightedText}>{'SORT'}</Text>
              <Image 
                source={images.chevron_down}
                style={styles.chevronDown}
                />
            </Touchable>
          </View>
          <View style={styles.lowerContainer}>
            <Touchable style={styles.touchableList}>
              <Text style={styles.listText}>{'Product Type'}</Text>
              <Image source={images.plus} style={styles.plus} />
            </Touchable>
            <Touchable style={styles.touchableList}>
              <Text style={styles.listText}>{'Color'}</Text>
              <Image source={images.plus} style={styles.plus} />
            </Touchable>
            <Touchable style={styles.touchableList}>
              <Text style={styles.listText}>{'Designer'}</Text>
              <Image source={images.plus} style={styles.plus} />
            </Touchable>
            <Touchable style={styles.touchableList}>
              <Text style={styles.listText}>{'Price'}</Text>
              <Image source={images.plus} style={styles.plus} />
            </Touchable>
          </View>
          <View style={styles.buttonContainer}>
            <Touchable style={styles.applyContainer}>
              <Text style={styles.applyText}>{'Apply'}</Text>
            </Touchable>
            <Touchable style={styles.cancelContainer}>
              <Text style={styles.cancelText}>{'Cancel'}</Text>
            </Touchable>
          </View>
        </View>
      </View>
    );
  }
}

export default FilterResult;