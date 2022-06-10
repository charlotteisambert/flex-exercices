import React, {FunctionComponent} from 'react';
import {StyleProp, View} from 'react-native';

import {StyleSheet, ViewStyle} from 'react-native';

interface SquareStyle {
  container: ViewStyle;
}

const styles = StyleSheet.create<SquareStyle>({
  container: {
    height: 100,
    width: 100,
    margin: 10,
  },
});

interface SquareProps {
  color: string;
  style?: StyleProp<ViewStyle>;
}

export const Square: FunctionComponent<SquareProps> = ({color, style}) => {
  return (
    <View style={[styles.container, {backgroundColor: color}, style]}></View>
  );
};
