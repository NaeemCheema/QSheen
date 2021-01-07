import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';

export const LABEL_POSITION = {
  RIGHT: 'right',
  LEFT: 'left'
};

class CircleCheck extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    outerSize: PropTypes.number,
    filterSize: PropTypes.number,
    innerSize: PropTypes.number,
    innerInnerSize: PropTypes.number,
    outerColor: PropTypes.string,
    filterColor: PropTypes.string,
    innerColor: PropTypes.string,
    innerInnerColor : PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    labelPosition: PropTypes.oneOf([LABEL_POSITION.RIGHT, LABEL_POSITION.LEFT]),
    styleCheckboxContainer: ViewPropTypes.style,
    styleLabel: Text.propTypes.style,
  };

  static defaultProps = {
    checked: false,
    outerSize: 26,
    filterSize: 23,
    innerSize: 18,
    innerInnerSize: 1,
    outerColor: '#FC9527',
    filterColor: '#FFF',
    innerColor: '#FC9527',
    label: '',
    labelPosition: LABEL_POSITION.RIGHT,
    styleLabel: {}
  };

  constructor(props) {
    super(props);
    const outerSize = (parseInt(props.outerSize) < 10 || isNaN(parseInt(props.outerSize))) ? 10 : parseInt(props.outerSize);
    const filterSize = (parseInt(props.filterSize) > outerSize + 3 || isNaN(parseInt(props.filterSize))) ? outerSize - 3 : parseInt(props.filterSize);
    const innerSize = (parseInt(props.innerSize) > filterSize + 5 || isNaN(parseInt(props.innerSize))) ? filterSize - 5 : parseInt(props.innerSize);
    const innerInnerSize = (parseInt(props.innerInnerSize) > filterSize + 5 || isNaN(parseInt(props.innerInnerSize))) ? filterSize - 5 : parseInt(props.innerInnerSize);
    const customStyle = StyleSheet.create({
      _circleOuterStyle: {
        width: outerSize,
        height: outerSize,
        borderRadius: outerSize / 2,
        backgroundColor: props.outerColor
      },
      _circleFilterStyle: {
        width: filterSize,
        height: filterSize,
        borderRadius: filterSize / 2,
        backgroundColor: props.filterColor,
      },
      _circleInnerStyle: {
        width: innerSize,
        height: innerSize,
        borderRadius: innerSize / 2,
        backgroundColor: props.innerColor,
        justifyContent:'center',
        alignSelf: 'center',
      },
      _circleInnerInnerStyle: {
        width: innerInnerSize,
        height: innerInnerSize,
        borderRadius: innerInnerSize / 2,
        backgroundColor: props.innerInnerColor ,
        alignSelf:'center',
      }
    });

    this.state = {
      customStyle: customStyle
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onToggle.bind(this)}>
        <View style={[styles.checkBoxContainer, this.props.styleCheckboxContainer]}>
          {this._renderLabel(LABEL_POSITION.LEFT)}
          <View style={[styles.alignStyle, this.state.customStyle._circleOuterStyle]}>
            <View style={[styles.alignStyle, this.state.customStyle._circleFilterStyle]}>
              {this._renderInner()}
            </View>
          </View>
          {this._renderLabel(LABEL_POSITION.RIGHT)}
        </View>
      </TouchableOpacity>
    );
  }

  _onToggle() {
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.checked);
    }
  }

  _renderInner() {
    return this.props.checked ? (<View style={this.state.customStyle._circleInnerStyle} ><View style={this.state.customStyle._circleInnerInnerStyle}/></View>) : (<View />);
  }

  _renderLabel(position) {
    return ((this.props.label.length > 0) && (position === this.props.labelPosition))
      ? <Text style={[styles.checkBoxLabel, this.props.styleLabel]}>{this.props.label}</Text>
      : <View />
  }
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxLabel: {
    marginLeft: 5,
    marginRight: 5,
  }
});
export {CircleCheck};