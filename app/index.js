import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import DropdownAlert from 'react-native-dropdownalert';

import RootStack from './navigator/RootStack';
import Provider from './redux/provider';
import {DropDownHolder} from './components';

class App extends Component {
  render(){
    return(
      <Provider>
        <NavigationContainer>
          <RootStack />
          <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)}/>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
