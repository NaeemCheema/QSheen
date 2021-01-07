import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image
} from 'react-native';

import {
  Header,
  Text,
  Card,
  Touchable,
  SnapCarousel,
  IntroCard,
} from '../../components';
import {screens} from '../../config';
import { STORAGE_URL } from '../../config';
import styles from './brands.styles';

class Brands extends Component {
  constructor(props) {
    super(props);

    this._onCardPress = this._onCardPress.bind(this);
  }
  componentDidMount() {
    this.props.fetchBrandsRequest();
  }

  _sliderContent = () => {
    const {brandsData} = this.props;
    return brandsData.data !== null ? brandsData.data.ads.map((item, index) => {
      return (
        <View style={styles.sliderContentContainer} key={index}>
          <Image
            source={{uri:item.cover_img}} 
            style={styles.sliderDesigner}
          />
          <View style={styles.sliderContent}>
            <Text style={styles.sliderTitle}>{item.name}</Text>
            <Text style={styles.sliderDetails}>{item.description}</Text>
          </View>
        </View>
      );
    }) : [];
  }

  _renderItem = ({item}) => {
    return (
      <Card style={styles.designerCard}>
        <Touchable
          style={{ width: '100%', alignItems: 'center' }}
          onPress={()=>{this.props.navigation.navigate(screens.designerdetail,{item})}}
        >
          <Image
            source={{uri: STORAGE_URL+'brands/'+item.cover_img}}
            style={styles.designerCover}
            resizeMode="cover"
          />
          <View style={styles.designerImageContainer}>
            <Image
              source={{uri: STORAGE_URL+'brands/'+item.profile_img}}
              style={styles.designerImage}
              resizeMode='center'
            />
          </View>
          <Text style={styles.designerName}>{item.name}</Text>
          <Text style={styles.designerMessage}>{item.description}</Text>
        </Touchable>
      </Card>
    );
  }

  _onCardPress(item) {
    this.props.navigation.navigate(screens.designerStack, {
      screen: screens.designerdetail,
      params: {item}
    });
  }

  render() {
    const {brandsData} = this.props;
    const {data} = brandsData;
    return (
      <View style={styles.screen}>
        <Header
          placeholder={'Brands'}
          leftIconPress={() => this.props.navigation.openDrawer()}
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
        <SnapCarousel
          containerStyle={styles.carousalContainer}
          data={data ? data.banners : null}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={brandsData.data !== null? brandsData.data.brands : []}
            renderItem={({item, index}) => {
              return (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <IntroCard
                    item={item}
                    onCardPress={this._onCardPress}
                    type={'brands'}
                  />
                </View>
              );
            }}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.brandsListContent}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    );
  }
}

export default Brands;
