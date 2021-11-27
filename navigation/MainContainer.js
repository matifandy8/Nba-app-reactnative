import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import DiscoverScreen from './screens/DiscoverScreen';
import ExploreScreen from './screens/ExploreScreen';
import StandingsScreen from './screens/StandingsScreen';

//Screen names
const discoverName = "Discover";
const exploreName = "Explore";
const standingsName = "Standings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //initialRouteName={discoverName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === discoverName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === exploreName) {
              iconName = focused ? 'search-circle' : 'search-circle-outline';

            } else if (rn === standingsName) {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6c5ecf',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 80},
        }}>

        <Tab.Screen name={discoverName} component={DiscoverScreen} />
        <Tab.Screen name={exploreName} component={ExploreScreen} />
        <Tab.Screen name={standingsName} component={StandingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;



