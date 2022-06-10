import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import { Container } from '../FlexBase';

export const Flex6: FunctionComponent = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 300,
            // flexGrow: 0,
            // flexShrink: 0,
            // flexBasis: 'auto',
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 300,
            // flexGrow: 0,
            // flexShrink: 0,
            // flexBasis: 'auto',
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 300,
            // flexGrow: 0,
            // flexShrink: 0,
            // flexBasis: 'auto',
          }}
        />
      </Container>
  );
};
