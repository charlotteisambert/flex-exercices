import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import { Container } from '../FlexBase';

export const Flex7: FunctionComponent = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 400,
            // flex: 1,
            // flexGrow: 1,
            // flexShrink: 1,
            // flexBasis: 'auto',
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 400,
            // flex: 1,
            // flexGrow: 1,
            // flexShrink: 1,
            // flexBasis: 'auto',
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 400,
            // flex: 1,
            // flexGrow: 1,
            // flexShrink: 1,
            // flexBasis: 'auto',
          }}
        />
      </Container>
  );
};
