import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Planet} from '@services/interfaces';
import {KeyValue} from './../index';
import t from '@services/translate';

interface Props {
  planet: Planet;
}

export const PlanetItem: React.FC<Props> = ({planet}: any) => {
  return (
    <View testID="planetItem">
      <KeyValue title={t.t('planet.population')} value={planet.population} />
      <KeyValue title={t.t('planet.gravity')} value={planet.gravity} />
    </View>
  );
};
