import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import { Container } from '../FlexBase';

export const Flex8: FunctionComponent = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 300,
            flex: 0,
            // flexShrink:1,
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 300,
            flex: 0,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 300,
            flex: 0,
          }}
        />
      </Container>
  );
};
