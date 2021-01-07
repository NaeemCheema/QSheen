import React, { PureComponent } from 'react';
import {Provider} from 'react-redux';

import {configureStore} from '../store/store';

class AppStateProvider extends PureComponent {
  render() {
    const { children } = this.props;
    const store = configureStore();
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }
}

export default AppStateProvider;
