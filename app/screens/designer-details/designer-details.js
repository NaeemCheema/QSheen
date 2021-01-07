import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Header,
  Text,
  Touchable,
} from '../../components';
import {images, COLOR} from '../../constants';
import { STORAGE_URL,screens } from '../../config';
import styles from './designer-details.styles';

class DesignerDetails extends Component {
  render() {
    const designer = this.props.route.params.item;
<<<<<<< HEAD
    console.log("designer: ", designer);
=======
    console.log(designer);
>>>>>>> f10c84e6bdc4a03b5a0a3174f72e3d1a963d7e07
    return (
      <View style={styles.screen}>
        <Header
          placeholder={'Designers'}
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
        <Image
          source={{uri: designer.cover_image}}
          style={styles.designerCover}
          resizeMode= 'cover'
        />
        <View style={styles.designerAlign}>
          <View style={styles.contentContainer}>
            <View style={styles.profileImage}>
              <Image
                source={{uri: designer.profile_image}}
                style={styles.image}
                resizeMode= 'contain'
              />
            </View>
            <View style={styles.align}>
              <ScrollView>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>{designer.name !== "" ? designer.name : designer.vendor_name}</Text>
                  <View style={styles.locationContainer}>
                    <Ionicons name="location-sharp" style={{marginRight:8}} color={COLOR.PRIMARY_COLOR} size={12}/>
                    <Text style={styles.location}>{designer.store_location}</Text>
                  </View>
                </View>
                <View style={styles.aboutContainer}>
                  <Text style={styles.about}>{'About Me'}</Text>
                  <Text style={styles.message}>{designer.about_me}</Text>
                  <View style={styles.divider}/>
                  {designer.vendor_tags && designer.vendor_tags.length !== 0 && 
                    <Text style={styles.tagsHeading}>{'Tags'}</Text>
                  }
                </View>
                <FlatList
                  data={designer.vendor_tags}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.tagsContainer}>
                        <Text style={styles.tags}>{item.name}</Text>
                      </View>
                    );
                  }}
                  ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
                  keyExtractor={(item, index) => String(index)}
                  style={{ flex: 1 }}
                  horizontal
                  contentContainerStyle={{marginLeft:25 ,marginBottom:10,}}
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                />
                <View style={styles.messageContainer}>          
                  <View style={styles.divider}/>
                  <Touchable style={styles.messageTouchable}>
                    <Text style={styles.messageLabel}>
                      Message Me
                    </Text>
                  </Touchable>
                </View>  
              </ScrollView> 
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default DesignerDetails;
