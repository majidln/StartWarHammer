import React from 'react';
import {Text} from 'react-native';
import {Container} from '@atomic-components/index';

export interface Props {}

const List: React.FC<Props> = ({}: any) => {
  return (
    <Container>
      <Text>In List screen</Text>
    </Container>
  );
};

export default List;
