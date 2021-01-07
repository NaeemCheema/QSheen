import React, { Component} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';

import {
  Text,
  Touchable,
  Header,
  Card,
} from '../../../components';
import {
  data,
} from '../../../constants';

import styles from './profile-section.style';
import AsyncStorage from '@react-native-community/async-storage';

class ProfileSection extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const {authData} = this.props;
    if (authData.data) {
      this.props.userProfileRequest({id: authData.data.ID});
    }
    else{
        var user_id = await AsyncStorage.getItem('user_id', null);
        console.log('user_id',user_id);
        if(user_id != undefined && user_id !=null){
          this.props.userProfileRequest({id:user_id});
        }
      
    }
  }


  render() {
    const profile = data.profile;
    const {profileData} = this.props;
    console.log("user: ", profileData);

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
        <View style={styles.contentContainer}>
          <Card style={styles.profileImage}>
            {profileData.data !== null && profileData.data.user_image !== null && profileData.data.user_image !== '' && 
              <Image 
                source={{uri: profileData.data.user_image}} 
                style={styles.imageStyle}
                resizeMode='contain'
              />
            }
            {(profileData.data === null || profileData.data.user_image === null || profileData.data.user_image === '') && 
              <View style={styles.profileEdit}/>
            }
          </Card>
          <View style={styles.align}>
            <Text style={styles.heading}>{profileData.data !== null ? profileData.data.display_name : 'User Name'}</Text>
            <ScrollView 
              style={{flex:1,paddingVertcal:15,}}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.personal} 
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.personalText}</Text>
                  </View>
                  <Image 
                    source={profile.chevron}
                    style={styles.button}
                  />   
                </View>
              </Touchable>
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.myorder} 
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.myorderText}</Text>
                  </View>                 
                  <Image 
                    source={profile.chevron}
                    style={styles.button}
                  />
                </View>
              </Touchable>
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.personal}
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.mymeasurementText}</Text>
                  </View>
                    <Image 
                      source={profile.chevron}
                      style={styles.button}
                    />
                </View>
              </Touchable>
              <Touchable>
              <View style={styles.details}>
                <View style={styles.contain}>
                  <Image 
                    source={profile.mywishlist}
                    style={styles.Icon}
                    resizeMode='contain'
                  />
                  <Text style={styles.textDetail}>{profile.mywishlistText}</Text>
                </View>
                <Image 
                  source={profile.chevron}
                  style={styles.button}
                />
              </View>
              </Touchable>
              <Touchable onPress={()=>{}}>
                <View style={styles.details}>
                  <View style={styles.contain}>
                    <Image 
                      source={profile.chevron}
                      style={styles.Icon}
                      resizeMode='contain'
                    />
                    <Text style={styles.textDetail}>{profile.paymentText}</Text>
                  </View>
                  <Image 
                    source={profile.chevron}
                    style={styles.button}
                  />
                </View>
              </Touchable>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileSection;