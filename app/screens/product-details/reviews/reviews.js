import React, {Component} from 'react';
import {View} from 'react-native';
import * as Progress from 'react-native-progress';

import {Text, Touchable} from '../../../components';
import {getPercentageHeight, getPercentageWidth, COLOR} from '../../../constants';
import styles from './reviews.styles';

class Reviews extends Component {
  render() {
    return (
      <View>
        <View style={{ marginTop: getPercentageHeight(40) }}>
          <View style={{ flexDirection: 'row' }}>
            <Touchable style={{ flex: 0.5 }}>
              <Text style={{ fontSize: 16 }}>Reviews</Text>
              <View style={styles.reviewBar}></View>
            </Touchable>
            <Touchable style={styles.noOfReviews}>
              <Text style={styles.noOfReviewsText}>No. of Reviews</Text>
            </Touchable>
          </View>
          
          <View style={{ marginTop: getPercentageHeight(20), flexDirection: 'row' }}>
            <View style={{ flex: 0.2, marginRight: getPercentageWidth(20), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: getPercentageHeight(80), width: getPercentageWidth(82), paddingHorizontal: getPercentageWidth(16), paddingVertical: getPercentageHeight(16), borderRadius: 16 }}>
                <Text style={styles.ratingCountText}>{'4.0'}</Text>
                <Text style={styles.ratingCountTextSmall}>{'Out of 5'}</Text>
              </View>

            </View>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', marginLeft: getPercentageHeight(11) }}>
              <View style={styles.propertiesContainer}>
                <View style={{ flex: 0.3 }}>
                  <Text style={styles.progressLableText}>
                    {'Exellent'}
                  </Text>
                </View>
                <View style={{ flex: 0.7 }}>
                  <Progress.Bar
                    animated
                    borderWidth={0}
                    unfilledColor={COLOR.PROD_COLOR_2}
                    color={COLOR.TEXT_PINK}
                    progress={0.7} width={getPercentageWidth(164)} />
                </View>
              </View>

              <View style={styles.propertiesContainer}>
                <View style={{ flex: 0.3 }}>
                  <Text style={styles.progressLableText}>
                    {'Size'}
                  </Text>
                </View>
                <View style={{ flex: 0.7 }}>
                  <Progress.Bar
                    animated
                    borderWidth={0}
                    unfilledColor={COLOR.PROD_COLOR_2}
                    color={COLOR.TEXT_PINK}
                    progress={0.4} width={getPercentageWidth(164)} />
                </View>
              </View>

              <View style={styles.propertiesContainer}>
                <View style={{ flex: 0.3 }}>
                  <Text style={styles.progressLableText}>
                    {'Fabric'}
                  </Text>
                </View>
                <View style={{ flex: 0.7 }}>
                  <Progress.Bar
                    animated
                    borderWidth={0}
                    unfilledColor={COLOR.PROD_COLOR_2}
                    color={COLOR.TEXT_PINK}
                    progress={0.2} width={getPercentageWidth(164)} />
                </View>
              </View>

              <View style={styles.propertiesContainer}>
                <View style={{ flex: 0.3 }}>
                  <Text style={styles.progressLableText}>
                    {'Quality'}
                  </Text>
                </View>
                <View style={{ flex: 0.7 }}>
                  <Progress.Bar
                    animated
                    borderWidth={0}
                    unfilledColor={COLOR.PROD_COLOR_2}
                    color={COLOR.TEXT_PINK}
                    progress={0.1} width={getPercentageWidth(164)} />
                </View>
              </View>
            </View>
          </View>

        </View>
        <View style={styles.writeReviewContainer}>
          <Touchable>
            <Text style={styles.writeReviewText}>Write a review</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

export default Reviews;
