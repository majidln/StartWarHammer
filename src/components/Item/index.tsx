import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Entity} from '@services/interfaces';

export interface Props {
  item: Entity;
}

const Item: React.FC<Props> = ({item, ...rest}: any) => {
  return (
    <View style={{...styles.wrapper, ...rest.style}} {...rest}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>Type: {item.__typename}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  type: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Item;
