import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';


export const Menu: FunctionComponent = () => {
    const {navigate} = useNavigation()

    return (
        <View>
            <Button onPress={()=>{navigate(`Exercice 1`)}} title={`Go to flex exercices`}/>
            <Button onPress={()=>{navigate('Squares exercice')}} title={`Go to Squares exercice`}/>
        </View>
    )
};
