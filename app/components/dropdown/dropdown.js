import React, {Component} from 'react';
import {View,Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './dropdown.style'
class Dropdown extends Component {

    render(){
        return(
            <View style={[styles.OuterContainer,this.props.OuterContainerStyles]}>
                <Text style={this.props.labelTextStyles}>{this.props.Label}</Text>
                <DropDownPicker
                    items={this.props.items}
                    defaultValue={this.props.defautValue}
                    value={this.props.value}
                    containerStyle={this.props.dropDownContainerStyles}
                    style={this.props.pickerStyles}
                    itemStyle={this.props.itemStyles}
                    dropDownStyle={this.props.dropDownStyles}
                    onChangeItem={this.props.onChangeSelection}
                    dropDownMaxHeight={this.props.maxHeight}
                    placeholder={this.props.placeholderText}
                    placeholderStyle={this.props.placeholderStyle}
                    activeItemStyle={this.props.activeItemStyle}
                    activeLabelStyle={this.props.activeLabelStyle}
                    selectedLabelStyle={this.props.selectedLabelStyle}
                    arrowStyle={this.props.arrowStyle}
                    arrowColor={this.props.arrowColor}
                    arrowSize={this.props.arrowSize}
                    showArrow={this.props.showArrow}
                    customArrowUp={this.props.customArrowUp}
                    customArrowDown={this.props.customArrowDown}
                    customTickIcon={this.props.customTickIcon}
                    zIndex={this.props.zIndex}
                    disabled={this.props.disabled}
                    isVisible={this.props.isVisible}
                    multiple={this.props.multiple}
                    multipleText={this.props.multipleText}
                    min={this.props.minNumberOfItems}
                    max={this.props.maxNumberOfItems}
                    searchable={this.props.searchable}
                    searchablePlaceholder={this.props.searchablePlaceholder}
                    searchablePlaceholderTextColor={this.props.searchablePlaceholderTextColor}
                    searchableStyle={this.props.searchableStyle}
                    searchableError={this.props.searchableError}
                    onOpen={this.props.onOpen}
                    onClose={this.props.onClose}
                />
            </View>
        );
    }

}
export {Dropdown};