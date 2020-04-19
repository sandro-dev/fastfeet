import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Deliveries from '~/pages/Deliveries';
import DeliveryDetail from '~/pages/DeliveryDetail';
import Problems from '~/pages/Problems';
import ReportProblem from '~/pages/ReportProblem';
import DeliveryConfirm from '~/pages/DelivevryConfirm';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Entregas"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Deliveries"
        component={Deliveries}
      />
      <Stack.Screen
        name="Detalhes"
        options={{
          title: 'Detalhes da encomenda',
        }}
        component={DeliveryDetail}
      />
      <Stack.Screen
        name="ReportProblem"
        options={{
          title: 'Informar Problema',
        }}
        component={ReportProblem}
      />

      <Stack.Screen
        name="Problems"
        options={{
          title: 'Visualizar Problemas',
        }}
        component={Problems}
      />

      <Stack.Screen
        name="DeliveryConfirm"
        options={{
          title: 'Confirmar Entrega',
        }}
        component={DeliveryConfirm}
      />
    </Stack.Navigator>
  );
}
