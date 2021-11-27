import React from 'react';
import { StyleSheet} from 'react-native';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <MainContainer style={styles.main}/>
  );
}

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#181829',
      color: '#555',
    },
});
