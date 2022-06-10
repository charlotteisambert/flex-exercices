import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import { Container } from '../FlexBase';

export const Flex3: FunctionComponent = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 400,
            flexGrow: 1,
            // flexShrink: 1,
            // minHeight:100,
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 400,
            flexGrow: 1,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 400,
            flexGrow: 1,
          }}
        />
      </Container>
  );
};

/**
 * Décommenter flexShrink : le bleu disparait. => Si je décommente le minHeight, est ce que le bleu réapparait ?
 * 
 * Réponse : Oui. FlexShink ne diminue pas un composant de plus que sa minHeight
 */