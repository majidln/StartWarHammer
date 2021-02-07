import React from 'react';
import {View, Text} from 'react-native';

export interface Props {}

const List: React.FC<Props> = ({}: any) => {
  return (
    <View>
      <Text>In List screen</Text>
    </View>
  );
};

export default List;
