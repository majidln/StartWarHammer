import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Planet} from '@services/interfaces';

interface Props {
  planet: Planet;
}

export const PlanetItem: React.FC<Props> = ({planet, ...rest}: any) => {
  return (
    <View>
      <Text>In PlantItem</Text>
      <Text>{JSON.stringify(planet)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
