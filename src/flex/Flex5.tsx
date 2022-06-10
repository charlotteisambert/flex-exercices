import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import { Container } from '../FlexBase';

export const Flex5: FunctionComponent = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 500,
            flexGrow: 1,
            flexShrink: 1,
            // flexBasis: 200,
            // flexBasis: 'auto',
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 500,
            flexGrow: 1,
            flexShrink: 1,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 500,
            flexGrow: 1,
          }}
        />
      </Container>
  );
};
