import React, { Component } from 'react';
import {
    ActivityIndicator,
  } from 'react-native'
import { WebView } from 'react-native-webview';
import {screens} from '../../config';
import styles from './webview.style';

class WebViewScreen extends Component {
    webview = null;


    handleWebViewNavigationStateChange = (newNavState) => {
        // newNavState looks something like this:
        // {
        //   url?: string;
        //   title?: string;
        //   loading?: boolean;
        //   canGoBack?: boolean;
        //   canGoForward?: boolean;
        // }
        const { url } = newNavState;
        if (!url) return;
    
        // one way to handle a successful form submit is via query strings
        if (url.includes(`order-received/${this.props.checkoutData.data.order_id}`)) {
          this.webview.stopLoading();
          // maybe close this view?
          this.props.navigation.navigate(screens.cart);
        }
    };
    
    
    render() {
        const { checkoutData } = this.props;
        console.log('checkoutData: ', checkoutData);
        return (
            <WebView
                ref={(ref) => (this.webview = ref)}
                source={{ uri: checkoutData.data !== null ? checkoutData.data.payment_url : null }}
                style={styles.flexContainer}
                startInLoadingState={true}
                renderLoading={() => (
                    <ActivityIndicator
                        color='black'
                        size='large'
                    />
                )}
                onNavigationStateChange={this.handleWebViewNavigationStateChange}
            />
        );
    }
}

export default WebViewScreen;