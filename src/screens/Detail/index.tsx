import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Entity} from '@services/interfaces';
import {useGetDetail} from '@hooks/index';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@navigation/index';
import {
  Container,
  Item,
  PersonItem,
  PlanetItem,
  StarshipItem,
} from '@components/index';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface Props {}

const Detail: React.FC<Props> = ({}: any) => {
  const route: DetailScreenRouteProp = useRoute();
  const {item}: {item: Entity} = route.params;

  // console.log('item is', item);
  const {data, error, loading}: any = useGetDetail(
    {id: item.id},
    item.__typename,
  );
  // console.log('in detail', data, error, loading);

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
    <Container>
      <Item item={item} isDetail={true}>
        <View>
          {loading && <Text testID="detailLoadingId">Loading...</Text>}
          {data && <View testID="typeDetailId">{renderDetail()}</View>}
          {error && <View testID="detailErrorId">An Error Occurred</View>}
        </View>
      </Item>
    </Container>
  );
};

export default Detail;
