import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Starship} from '@services/interfaces';

interface Props {
  starship: Starship;
}

export const StarshipItem: React.FC<Props> = ({starship, ...rest}: any) => {
  return (
    <View>
      <Text>In starship item</Text>
      <Text>{JSON.stringify(starship)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
