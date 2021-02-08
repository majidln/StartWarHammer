import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface Props {
  title: String;
  value: String;
}

export const KeyValue: React.FC<Props> = ({title, value}: any) => {
  return (
    <View style={styles.wrapper} testID="keyValueId">
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
  title: {
    color: '#2c3e50',
    fontSize: 18,
    paddingRight: 4,
  },
  value: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
