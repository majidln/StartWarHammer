import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Person} from '@services/interfaces';

interface Props {
  person: Person;
}

const PersonItem: React.FC<Props> = ({person, ...rest}: any) => {
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

export default PersonItem;
