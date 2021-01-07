import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
} from 'react-native';

import {
  Text,
  Card,
  Touchable,
  Header,
} from '../../components';
import {screens} from '../../config';
import {images, data} from '../../constants';
import styles from './recommendations.style';

class Recommendations extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {recommendations} = data;
    return (
      <View style={styles.screen}>
        <Header
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
        <Card style={styles.mainContainer}>
          <Text style={styles.heading}>{'Recommendations'}</Text>
          <FlatList
            data={recommendations.data}
            renderItem={({item}) => {
              return (
                <Touchable style={styles.recommendContainer}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                  <Image
                    source={images.chevron}
                    style={styles.chevron}
                  />
                </Touchable>    
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 0.5 }} />}
            keyExtractor={(item, index) => String(index)}
            style={{ flex: 1}}
            contentContainerStyle={{marginLeft:20,marginRight:20, paddingBottom:30,}}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </Card>
      </View>
    );
  }
}

export default Recommendations;