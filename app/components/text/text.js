import React, {Component} from 'react';
import {
  StyleSheet,
  Text as RCText
} from 'react-native';
import { FontHelper } from '../../helpers';
import _ from 'lodash';

class Text extends Component {
  render() {
    var {style} = this.props;

    if (style instanceof Array)
      style = _.map(style, (styleObject) => styleObject && FontHelper(StyleSheet.flatten(styleObject)));
    else
      style = FontHelper(StyleSheet.flatten(this.props.style || {}));

    return (
      <RCText
        {...this.props}
        style={style}>{this.props.children}</RCText>
    )
  }
}

export {Text}
