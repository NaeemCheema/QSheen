import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import Video from 'react-native-video';
import {Header, Touchable} from '../../../components'
import { getPercentageHeight, getPercentageWidth, images,COLOR } from '../../../constants';

export default class MeasurementsVideo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Header
                //onSearchPress={() => alert('asds')}
                title={"How to take measurements"}
                leftIcon={images.back}
                leftIconPress={() => this.props.navigation.goBack()}
                />
                <Video source={images.measurementsVideo}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                //onBuffer={this.onBuffer}                // Callback when remote video is buffering
                //onError={this.videoError}               // Callback when video cannot be loaded
                controls={true}
                style={styles.backgroundVideo} />
                <Touchable style={styles.takeMeasurementsContainer} onPress={() => this.props.navigation.goBack()}>
                    <View style={styles.flexOneCenter}>
                        <Image source={images.measurements} style={styles.measurementsStyles} resizeMode='contain' />
                    </View>
                    <View style={styles.flexOneCenter}>
                        <Text>Take Measurements</Text>
                    </View>
                    <View style={styles.flexOneCenter}>
                        <Image source={images.rightArrow} style={styles.rightArrow} resizeMode='contain' />
                    </View>
                </Touchable>
            </View>

        );
    }
}
var styles = StyleSheet.create({
    backgroundVideo: {
      //position: 'absolute',
      marginTop: getPercentageHeight(20),
      left: 0,
      bottom: 0,
      right: 0,
      width:'95%',
      height: getPercentageHeight(385),
    },
    takeMeasurementsContainer: {
        width: '95%',
        flexDirection: 'row',
        borderColor: COLOR.MERCURY,
        backgroundColor:'white',
        borderWidth: 0.5,
        height: getPercentageHeight(50),
        marginTop:getPercentageHeight(25),
        marginLeft:getPercentageWidth(10),
        marginRight:getPercentageWidth(10),
        alignItems:'center',
        shadowColor: COLOR.MERCURY,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 3,
        //shadowRadius: 0.5,
        elevation:9
      },
      rightArrow: {
        width: getPercentageWidth(18),
        height: getPercentageHeight(25),
        alignSelf: 'flex-end', marginRight: getPercentageWidth(9)
      },
      measurementsStyles: {
        width: getPercentageWidth(37),
        height: getPercentageHeight(23),
        alignSelf:'center',
        marginLeft: getPercentageWidth(11),
      },
      flexOneCenter: {
        flex: 1,
        justifyContent: 'center',
        //marginLeft: getPercentageWidth(40)
      }
  });