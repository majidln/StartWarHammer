import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import ListScreen from '@screens/list';
import DetailScreen from '@screens/detail';

export type RootStackParamList = {
  List: undefined;
  Detail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigation() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
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
