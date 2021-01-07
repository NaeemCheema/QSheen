import React, { Component } from 'react';
import {
  View
} from 'react-native'

import {
  Touchable,
  Text,
} from '../';
//import COLORS from '../../common/colors';
import styles from './segment.style';

class Segment extends Component {
  render() {
    const { segmentElements, selectedSegment, children, designerName } = this.props;
    return (
      <View style={this.props.style}>
        <View style={[styles.segmentContainer, this.props.segmentStyles]}>
          {segmentElements.map((element, index) => {
            console.log('element: ', index);
            element = index === 0 ? element : designerName !== '' ? element+' '+designerName : '';
            return (
              <Touchable
                onPress={() => this.props.onPress(index)}
                key={index}
                // style={{ flex: 1 }}
                style={[
                  styles.segmentItem,
                  index == selectedSegment? { borderColor: this.props.activeBorderColor? this.props.activeBorderColor : '#d19230' } : null,
                  this.props.segmentItemStyle,
                  this.props.perIndexStyle? this.props.perIndexStyle[index] : null,
                ]}
              >
                <Text
                  style={[
                    styles.segmentItemText,
                    this.props.segmentText,
                    index == selectedSegment? { color: 'black' } : null,
                  ]}>
                    {element}
                </Text>
              </Touchable>
            );
          })}      
        </View>
        {
          Array.isArray(children)?
          this.props.children[selectedSegment]
          :
          children
        }
      </View>
    );
  }
}

export default Segment;
