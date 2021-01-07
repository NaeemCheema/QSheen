import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import {
  Text,
  Card,
  Touchable,
  ProductTile,
} from '../../components';
import {images, data} from '../../constants';
import styles from './search-result.style';

class SearchResult extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {search} = data;
    return (
      <View style={styles.screen}>
        <Card style={styles.mainContainer}>
          <ScrollView 
            contentContainerStyle={{paddingBottom:50}}
            showsVerticalScrollIndicator ={false}
          >
            <View style={styles.upperContainer}>
              <Text style={styles.heading}>{'Oops nothing found'}</Text>
              <Image style={styles.image} source={images.sorry}/>
              <Text style={styles.subHeading}>
                {'Try to search new Item or check your spelling'}
              </Text>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomHeading}>{'You might like'}</Text>
              <Touchable
                onPress={() => {}}
                style={{alignSelf: 'flex-end', marginBottom: 13}}
              >
                <Text style={styles.viewAll}>{'View All'}</Text>
              </Touchable>
              <FlatList
                data={search.image}
                renderItem={(item) => (
                  <View style={{ width: '50%', alignItems: 'center' }}>
                    <ProductTile item={item.item}/>
                  </View>
                )}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ }} />}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={{paddingVertical:10 }}
              />
            </View>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

export default SearchResult;