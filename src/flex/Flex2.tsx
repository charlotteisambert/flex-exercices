import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import { Container } from '../FlexBase';

export const Flex2: FunctionComponent = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 400,
            // flexGrow: 1,
            // flexShrink: 2,
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 400,
            // flexGrow: 1,
            // flexShrink: 1,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 400,
            // flexGrow: 1,
          }}
        />
      </Container>
  );
};

/**
 * Décommenter les lignes commentées => lequel est le plus petit ?
 * 
 * Réponse : Le bleu
 */