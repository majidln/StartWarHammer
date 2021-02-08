import React from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyValue} from './../index';
import {Person, Film} from '@services/interfaces';
import t from '@services/translate';

interface Props {
  person: Person;
}

export const PersonItem: React.FC<Props> = ({person}: any) => {
  return (
    <View testID="personItem" style={styles.wrapper}>
      {person.height && (
        <KeyValue title={t.t('person.height')} value={person.height} />
      )}
      {person.mass && (
        <KeyValue title={t.t('person.mass')} value={person.mass} />
      )}
      <KeyValue
        title={t.t('person.homeworld')}
        value={person?.homeworld?.name}
      />
      <KeyValue
        title={t.t('person.film')}
        value={person.films.map((film: Film) => film.title).join(', ')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
