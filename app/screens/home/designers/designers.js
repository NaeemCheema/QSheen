import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';

import { STORAGE_URL } from '../../../config';
<<<<<<< HEAD
import {Text, Touchable} from '../../../components';
=======
import {Text,Touchable} from '../../../components';
import {screens} from '../../../config';

>>>>>>> f10c84e6bdc4a03b5a0a3174f72e3d1a963d7e07
import {data} from '../../../constants';
import styles from './designers.style';

class Designers extends Component {
  _renderItem = (item) => {
    const designers = item;
    return (
<<<<<<< HEAD
      <Touchable onPress={() => this.props.onDesignerDetail(item)}> 
        <View style={styles.subContainer}>
=======
      <> 
        <Touchable style={styles.subContainer} onPress={()=>this.props.navigation.navigate(screens.designerStack, {
          screen:screens.designerdetail,
          params:{
            item: designers
          }
          })}>
>>>>>>> f10c84e6bdc4a03b5a0a3174f72e3d1a963d7e07
          <Image
            source={{uri: designers.cover_image !== undefined ? designers.cover_image : designers.profile_image}}
            style={styles.designImage}
          />
          <Text style={styles.designName}>{designers.name}</Text>
          <Text style={styles.designLocation}>{designers.store_location}</Text>
<<<<<<< HEAD
        </View>
      </Touchable>
=======
        </Touchable>
      </>
>>>>>>> f10c84e6bdc4a03b5a0a3174f72e3d1a963d7e07
    );
  }
  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(data)=>{return data.id.toString()}}
          contentContainerStyle={{marginLeft: 3, paddingRight: 16}}
          renderItem={({item})=>{
            return(
              this._renderItem(item)
            );
          }}
        />
      </View>
    );
  }
}

export {Designers};