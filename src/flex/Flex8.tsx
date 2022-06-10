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

/**
 * Décommenter flexShrink => Est ce que le lbue change de taille ?
 * 
 * Réponse : Oui. Pour flex: 0, flexShrink est à 0. Alors que pour toute autre valeur positive de flex, flexShrink est à 1
 */