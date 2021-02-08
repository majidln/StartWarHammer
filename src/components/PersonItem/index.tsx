import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Person} from '@services/interfaces';

interface Props {
  person: Person;
}

export const PersonItem: React.FC<Props> = ({person}: any) => {
  return (
    <View>
      <Text>In person item</Text>
      <Text>{JSON.stringify(person)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
