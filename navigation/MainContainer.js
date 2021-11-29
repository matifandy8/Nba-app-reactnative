import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStacks from './TabStacks';

function MainContainer() {
  return (
    <NavigationContainer>
           <TabStacks />
    </NavigationContainer>
  );
}

export default MainContainer;



