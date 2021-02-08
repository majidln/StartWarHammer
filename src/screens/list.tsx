import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TextInput,
  Text,
} from 'react-native';
import {Container} from '@atomic-components/index';
import {useGetList} from '@hooks/index';
import {ResponsePage, Entity} from '@services/interfaces';
import Item from '@src/components/Item/index';

interface Props {}

const List: React.FC<Props> = ({}: any) => {
  const [search, setSearch] = React.useState('');
  const {
    data,
    error,
    loading,
    refetch,
  }: {
    data: ResponsePage | undefined;
    error: Object | undefined;
    loading: Boolean;
    refetch: Function;
  } = useGetList({
    variables: {search},
  });
  console.log('in list', data, error, loading);

  const renderLoading = () => {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };

  React.useEffect(() => {
    console.log('search', search);
    refetch({search});
  }, [search, refetch]);

  return (
    <Container>
      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search name"
      />
      {data && (
        <FlatList
          style={{flex: 1}}
          data={[...data.starships, ...data.persons, ...data.planets]}
          renderItem={({item}: {item: Entity}) => <Item item={item} />}
          keyExtractor={(item, index) => index + ''}
        />
      )}
      {loading && renderLoading()}
      {error && <Text>An error occured</Text>}
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
