import React, { Component } from 'react';
import {
  Image,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';

import {} from '../';
import styles from './slider.styles';

class Slider extends Component {
  render() {
    const content = this.props.content? this.props.content : [
      'http://i.imgur.com/2nCt3Sbl.jpg',
      'http://i.imgur.com/2nCt3Sbl.jpg',
      'http://i.imgur.com/2nCt3Sbl.jpg',
    ];
    return (
      <View style={[styles.container, this.props.sliderContainerStyles]}>
        <Swiper
          dot={ <View style={[styles.sliderDot, this.props.dotStyle]} />}
          activeDot={ <View style={[styles.sliderActiveDot, this.props.activeDotStyle]} />}
          paginationStyle={[{ bottom: 15 }, this.props.paginationStyle? this.props.paginationStyle : null ]}
          autoplay
          autoplayTimeout={1.5}
        >
          {
            this.props.renderedContent?
            this.props.renderedContent()
            :
            content.map((item, index) => {
              console.log('item: ', item);
              return (
                <Image
                  source={{uri: item.cover_image}}
                  style={[styles.sliderImage, this.props.sliderImageStyles]}
                  key={index}
                />
              );
            })
          }
        </Swiper>
      </View>
    );
  }
}

export {Slider};
