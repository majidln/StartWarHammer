import React from 'react';
import {View} from 'react-native';
import {KeyValue} from './../index';
import {Starship, Film} from '@services/interfaces';
import t from '@services/translate';

interface Props {
  starship: Starship;
}

export const StarshipItem: React.FC<Props> = ({starship}: any) => {
  return (
    <View testID="starshipId">
      {starship.crew && (
        <KeyValue title={t.t('starship.crew')} value={starship.crew} />
      )}
      {starship.length && (
        <KeyValue title={t.t('starship.length')} value={starship.length} />
      )}
      <KeyValue
        title={t.t('starship.film')}
        value={starship.films.map((film: Film) => film.title).join(', ')}
      />
    </View>
  );
};
