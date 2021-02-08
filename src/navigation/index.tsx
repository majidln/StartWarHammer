import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from '@screens/List/index';
import DetailScreen from '@screens/Detail/index';
import {Entity} from '@services/interfaces';

export type RootStackParamList = {
  List: undefined;
  Detail: {item: Entity};
};

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#27ae60',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
