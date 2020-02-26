import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: '#56C596',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen
        name="Dagbok"
        component={HomeScreen}
        options={{
          title: 'Bibliotek',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-fitness" size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Kalender"
        component={LinksScreen}
        options={{
          title: 'Kalender',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-calendar" size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Plus"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle" size={40} />,
        }}
      />
      <BottomTab.Screen
        name="Statistik"
        
        component={HomeScreen}
        options={{
          title: 'Statistik',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-stats" size={30}/>,
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={HomeScreen}
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" size={30}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Dagbok':
      return 'Dagbok';
    case 'Kalender':
      return 'Kalender';
    case 'Statestik':
      return 'Statestik';
    case 'MinProfil':
      return 'Min Profil';
    case 'Plus':
      return 'Plus gör något';
  }
}
