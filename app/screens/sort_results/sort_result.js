import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
} from 'react-native';

import {
  Text,
  Touchable,
  Header,
  CircleCheck
} from '../../components';
import {screens} from '../../config';
import {images, data, COLOR} from '../../constants';
import styles from './sort_result.style';

class SortResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mostPopular: true,
      lowToHigh: false,
      highToLow: false,
      newArrival: false,
    };
  }
  render() {
    return (
      <View style={styles.screen}>
        <Header
          placeholder= {'Sort Results'}
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
              style={styles.searchDownSetting}
            >
              <Text style={styles.nonHighlightedText}>{'REFINE YOUR SEARCH'}</Text>
              <Image 
                source={images.chevron_down}
                style={styles.chevronDown}
                />
            </Touchable>
            <Touchable 
              style={styles.searchUpperSetting}
              onPress={() =>      
                this.props.navigation.navigate(screens.mainStack, {
                screen: screens.filterresult,
              })}
            >
              <View/>
              <Text style={styles.highlightedText}>{'SORT'}</Text>
              <Image 
                source={images.chevron_up}
                style={styles.chevronUp}
                />
            </Touchable>
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.check}>
              <CircleCheck
                checked={this.state.mostPopular}
                onToggle={()=>{this.setState({mostPopular: !this.state.mostPopular, lowToHigh: false, highToLow: false, newArrival: false})}}
                outerColor={COLOR.TEXT_LIGHT}
                innerColor={COLOR.PROFILE_BG}
                filterColor={COLOR.WHITE}
                innerInnerColor={COLOR.WHITE}
                innerInnerSize={13}
                outerSize={27}
                innerSize={26}
                filterSize={26}
              />
              <Text style={styles.checkText}>{'Most Popular'}</Text>
            </View>
            <View style={styles.check}>
              <CircleCheck
                checked={this.state.lowToHigh}
                onToggle={()=>{this.setState({lowToHigh: !this.state.lowToHigh, mostPopular: false, highToLow: false, newArrival: false})}}
                outerColor={COLOR.TEXT_LIGHT}
                innerColor={COLOR.PROFILE_BG}
                filterColor={COLOR.WHITE}
                innerInnerColor={COLOR.WHITE}
                innerInnerSize={13}
                outerSize={27}
                innerSize={26}
                filterSize={26}
              />
              <Text style={styles.checkText}>{'Low to High'}</Text>
            </View>
            <View style={styles.check}>
              <CircleCheck
                checked={this.state.highToLow}
                onToggle={()=>{this.setState({highToLow: !this.state.highToLow, lowToHigh: false, mostPopular: false, newArrival: false})}}
                outerColor={COLOR.TEXT_LIGHT}
                innerColor={COLOR.PROFILE_BG}
                filterColor={COLOR.WHITE}
                innerInnerColor={COLOR.WHITE}
                innerInnerSize={13}
                outerSize={27}
                innerSize={26}
                filterSize={26}
              />
              <Text style={styles.checkText}>{'High to Low'}</Text>
            </View>
            <View style={styles.check}>
              <CircleCheck
                checked={this.state.newArrival}
                onToggle={()=>{this.setState({newArrival: !this.state.newArrival, lowToHigh: false, highToLow: false, mostPopular: false})}}
                outerColor={COLOR.TEXT_LIGHT}
                innerColor={COLOR.PROFILE_BG}
                filterColor={COLOR.WHITE}
                innerInnerColor={COLOR.WHITE}
                innerInnerSize={13}
                outerSize={27}
                innerSize={26}
                filterSize={26}
              />
              <Text style={styles.checkText}>{'New Arrivals'}</Text>
            </View>
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

export default SortResult;