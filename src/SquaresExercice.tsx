import React, {FunctionComponent} from 'react';
import {ScrollView, Button} from 'react-native';
import {Square} from './Square';

import {StyleSheet, View, ViewStyle} from 'react-native';

export const SquareExercice: FunctionComponent = () => {
  return (
    <View style={{flex:1}}>
        <View
            style={{
                height: 70,
                backgroundColor: 'purple',
            }}
        />
        <ScrollView
            style={{backgroundColor: 'green'}}
            contentContainerStyle={{
                alignItems: 'center',
                backgroundColor: 'grey',
                //   flex:1
                //   flexGrow: 1,
            }}
        >
            <>
            <Square color={'blue'} />
            <Square color={'red'} />
            <Square color={'yellow'} />
            {/* <Square color={'red'} />
            <Square color={'orange'} />
            <Square color={'purple'} />
            <Square color={'red'} />
            <Square color={'purple'} />
            <Square color={'yellow'} /> */}
            </>
        </ScrollView>
        <View
            style={{
            height: 100,
            backgroundColor: 'red',
            }}
        />
    </View>
  );
};


// flexGrow et non flex dans le contentContainerStyle!