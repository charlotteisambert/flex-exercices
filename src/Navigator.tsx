
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Flex1 } from './flex/Flex1';
import { Flex2 } from './flex/Flex2';
import { Flex3 } from './flex/Flex3';
import { Flex4 } from './flex/Flex4';
import { Flex5 } from './flex/Flex5';
import { Flex6 } from './flex/Flex6';
import { Flex7 } from './flex/Flex7';
import { Flex8 } from './flex/Flex8';
import { Menu } from './Menu';
import { SquareExercice } from './SquaresExercice';


const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Squares exercice" component={SquareExercice}/>
            <Stack.Screen name="Exercice 1" component={Flex1} initialParams={{nextPage:2}}/>
            <Stack.Screen name="Exercice 2" component={Flex2} initialParams={{nextPage:3}} />
            <Stack.Screen name="Exercice 3" component={Flex3} initialParams={{nextPage:4}} />
            <Stack.Screen name="Exercice 4" component={Flex4} initialParams={{nextPage:5}} />
            <Stack.Screen name="Exercice 5" component={Flex5} initialParams={{nextPage:6}} />
            <Stack.Screen name="Exercice 6" component={Flex6} initialParams={{nextPage:7}} />
            <Stack.Screen name="Exercice 7" component={Flex7} initialParams={{nextPage:8}} />
            <Stack.Screen name="Exercice 8" component={Flex8} />
          </Stack.Navigator>
      </NavigationContainer>
    )
};
