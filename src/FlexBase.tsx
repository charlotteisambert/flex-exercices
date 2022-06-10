import {StyleSheet, View, Button} from 'react-native';
import React, {FunctionComponent} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';


const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  exerciceContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export const Container: FunctionComponent = ({children}) => {
  const { params } = useRoute()
  const {navigate} = useNavigation()

  return (
      <View style={styles.pageContainer}>
        {params && params.nextPage!==undefined && <Button onPress={()=>{navigate(`Exercice ${params.nextPage}`)}} title={`Go to exercice ${params.nextPage}`}/>}
        <View style={styles.exerciceContainer}>
          {children}
        </View>
      </View>
  );
};
