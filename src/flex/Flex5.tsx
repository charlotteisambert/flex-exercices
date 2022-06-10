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

/**
 * Décommenter flexBasis => Entre le bleu et le vert, lequel sera le plus gros entre le bleu et le vert ?
 * 
 * Réponse : le vert sera le plus gros : flexBasis est appliqué avant flexGrow et flexShrink. Les deux composants vert et bleu grandissent d'autant, mais le bleu est plus petit à l'origine
 */
