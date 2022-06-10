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
            // flex: 2,
            // flexGrow: 2,
            // flexShrink: 1,
            // flexBasis: 'auto',
          }}
        />
        <View
          style={{
            backgroundColor: 'green',
            height: 400,
            // flex: 2,
            // flexGrow: 2,
            // flexShrink: 1,
            // flexBasis: 'auto',
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            height: 400,
            // flex: 2,
            // flexGrow: 2,
            // flexShrink: 1,
            // flexBasis: 'auto',
          }}
        />
      </Container>
  );
};

/**
 * Décommneter les lignes flex: 2, puis les autres lignes. Le comportement est-il différent ?
 * 
 * Réponse : Non ! ce sont les valeurs de flex:2. flex: 2 met aussi flexShrink à 1.
 */