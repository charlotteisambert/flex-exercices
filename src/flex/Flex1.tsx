import {View} from 'react-native';
import React from 'react';
import { Container } from '../FlexBase';

export const Flex1 = () => {
  return (
      <Container>
        <View
          style={{
            backgroundColor: 'blue',
            height: 60,
            // flexGrow: 2
          }}></View>
        <View
          style={{
            backgroundColor: 'green',
            height: 30,
            // flexGrow: 1
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 60,
            // flexGrow: 1
          }}></View>
      </Container>
  );
};

/**
 * Décommenter les trois flexGrow => lequel est le plus grand entre le vert et le rouge ?
 * 
 * Réponse : Le vert. Les deux gagent autant d'espace, mais le vert de base est plus grand 
 */