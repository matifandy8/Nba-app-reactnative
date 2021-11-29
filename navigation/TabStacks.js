import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Tabs';
import GameDetails from './screens/GameDetails';

const Stack = createStackNavigator();

const TabStacks = ({ params }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="GameDetails"
      component={GameDetails}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default TabStacks;