import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import {Container} from '@atomic-components/index';
import {useGetList} from '@hooks/index';
import {QueryResponse, Entity} from '@services/interfaces';
import Item from '@src/components/Item/index';

export interface Props {}

const List: React.FC<Props> = ({}: any) => {
  const {data, error, loading}: QueryResponse = useGetList();
  const [search, setSearch] = React.useState('');

  const renderLoading = () => {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };

  return (
    <Container>
      {!(data && Object.keys(data).length > 0) && loading && renderLoading()}
      {data && (
        <View>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Search name"
          />
          <FlatList
            data={[...data.starships, ...data.persons, ...data.planets]}
            renderItem={({item}: {item: Entity}) => <Item item={item} />}
            keyExtractor={(item, index) => index + ''}
          />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  loadingWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 8,
    fontSize: 18,
  },
});

export default List;
