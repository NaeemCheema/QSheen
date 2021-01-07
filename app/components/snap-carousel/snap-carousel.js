import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {
  Text,
  Touchable
} from '../../components';
import {width, images, height} from '../../constants';
import styles from './snap-carousel.styles';

import { STORAGE_URL } from '../../config';

class SnapCarousel extends Component {
  state = {
    activeSlide: 0,
  };
  _renderItem = ({item}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Image
          source={{uri: item.cover_image}}
          style={styles.image}
        />
        <Touchable style={styles.detailContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description} numberOfLines={2}>{item.description? item.description : item.about_me}</Text>
        </Touchable>
      </View>
    );
  }
  _renderPagination = (length) => {
    return (
      <Pagination
        dotsLength={length}
        activeDotIndex={this.state.activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.3}
        inactiveDotScale={1}
      />
    );
  }
  render() {
    return (
      <View style={this.props.containerStyle}>
        <Carousel
          data={this.props.data !== null ? this.props.data : []}
          renderItem={this._renderItem}
          sliderWidth={width}
          sliderHeight={height * 0.29}
          itemWidth={width * 0.88}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        {this._renderPagination(this.props.data ? this.props.data.length : 3)}
      </View>
    );
  }
}

export {SnapCarousel};
