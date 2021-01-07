import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';

import {
  Header,
  SnapCarousel,
  IntroCard,
} from '../../components';
import {screens} from '../../config';
import styles from './designers.styles';

class Designers extends Component {
  constructor(props) {
    super(props);

    this._onCoverImagePress = this._onCoverImagePress.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchDesignersRequest();
  }

  _onCoverImagePress(item) {
    this.props.navigation.navigate(screens.designerdetail, {item});
  }

  render() {
    const {designersData} = this.props;
    const {data} = designersData;
    return (
      <View style={styles.screen}>
        <Header
          placeholder={'Designers'}
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
            data={designersData.data !== null ? designersData.data.designers : []}
            renderItem={({item}) => {
              return (
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <IntroCard
                    item={item}
                    type={'designers'}
                    onCardPress={this._onCoverImagePress}
                  />
                </View>
              );
            }}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.designerListContent}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    );
  }
}

export default Designers;
