import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  Text,
  Touchable,
} from '../index';

const ProfileDetail =({styles,Icon,chevron,textValue})=>{
  return(
    <View style={styles.details}>
      <View style={styles.contain}>
        <Image 
          source={Icon}
          style={styles.Icon}
          resizeMode='contain'
        />
        <Text style={styles.textDetail}>{textValue}</Text>
      </View>
      <Touchable onPress={()=>{console.log(1)}}>
        <Image 
          source={chevron}
          style={styles.button}
        />
      </Touchable>
    </View>
  );
};
export default ProfileDetail;