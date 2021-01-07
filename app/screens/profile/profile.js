import React, { Component} from 'react';
import {
  View,
} from 'react-native';

import {
  DropDownHolder
} from '../../components';
import Auth from '../auth';
import ProfileSection from './profile-section';
import styles from './profile.style';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {authData} = this.props;
    const { alreadyLoggedIn} = this.props.route.params? this.props.route.params:false;
    console.log('authData=>',authData)
    return (
      <View style={styles.screen}>
        {
          !authData.data && !alreadyLoggedIn ?     
          <Auth navigation={this.props.navigation} />
          :
          <ProfileSection/>
        }
      </View>
    );
  }
}

export default Profile;