import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Entity} from '@services/interfaces';
import {useGetDetail} from '@hooks/index';
import Item from '@src/components/Item/index';
import PersonItem from '@src/components/PersonItem/index';
import PlanetItem from '@src/components/PlanetItem/index';
import StarshipItem from '@src/components/StarshipItem/index';

interface Props {}

const Detail: React.FC<Props> = ({}: any) => {
  const route = useRoute();
  const {item}: {item: Entity} = route.params;

  console.log('item is', item);
  const {data, error, loading}: any = useGetDetail(
    {id: item.id},
    item.__typename,
  );
  console.log('in detail', data, error, loading);

  const renderDetail = () => {
    console.log('type', item.__typename);
    if (item.__typename === 'Person') {
      return <PersonItem person={data.person} />;
    } else if (item.__typename === 'Planet') {
      return <PlanetItem planet={data.planet} />;
    } else if (item.__typename === 'Starship') {
      return <StarshipItem starship={data.starship} />;
    }
    return null;
  };
  return (
    <View>
      <Item item={item} isDetail={true}>
        {data && renderDetail()}
      </Item>
    </View>
  );
};

export default Detail;
