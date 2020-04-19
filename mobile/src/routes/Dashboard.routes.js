import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveryRoutes from '~/routes/Delivery.routes';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#7d40e7',
        }}
      >
        <Tab.Screen
          name="Entregas"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="reorder" size={size} color={color} />
            ),
          }}
          component={DeliveryRoutes}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-circle" size={size} color={color} />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
}
