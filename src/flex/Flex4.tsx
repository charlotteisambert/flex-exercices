import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import { Container } from '../FlexBase';

export const Flex4: FunctionComponent = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 100,
            // flexBasis: 400,
            // minHeight:700,
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 100,
          }}
        />
      </Container>
  );
};
