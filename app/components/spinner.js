import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import {COLOR} from '../constants';

export const Spinner = ({ size, style, color, fullScreen, fullScreenOverlay, fullScreenTransparentOverlay }) => (
  <View style={[styles.spinnerStyle, style, fullScreenOverlay && fullScreenOverlayContainerStyles, fullScreenTransparentOverlay && fullScreenTransparentOverlayContainerStyles ,fullScreen && { flex: 1 }]}>
    <ActivityIndicator color={color || COLOR.PRIMARY_COLOR} size={size || 'large'} />
  </View>
);

const styles = {
  spinnerStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  }
};

const fullScreenOverlayContainerStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 100,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.8,
};

const fullScreenTransparentOverlayContainerStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 100,
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
};
