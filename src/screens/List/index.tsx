import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SectionList,
  TextInput,
  Text,
} from 'react-native';
import {Container, Item} from '@components/index';
import {useGetList} from '@hooks/index';
import {ResponsePage, Entity} from '@services/interfaces';

interface Props {}

const List: React.FC<Props> = ({}: any) => {
  const [search, setSearch] = React.useState('');
  const {
    data,
    error,
    loading,
    refetch,
  }: {
    data: ResponsePage;
    error: Object | undefined;
    loading: Boolean;
    refetch: Function;
  } = useGetList({search});

  const renderLoading = () => {
    return (
      <View style={styles.loadingWrapper} testID="listLoadingID">
        <ActivityIndicator size="large" color={'#3498db'} />
      </View>
    );
  };

  React.useEffect(() => {
    refetch({search});
  }, [search, refetch]);

  const getSections = () => {
    return Object.keys(data).map((item: String) => {
      return {
        title: item,
        data: data[item],
      };
    });
  };

  return (
    <Container>
      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search name"
      />
      {data && (
        <SectionList
          testID="listID"
          style={styles.list}
          sections={getSections()}
          renderItem={({item}: {item: Entity}) => <Item item={item} />}
          keyExtractor={(item, index) => index + ''}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      )}
      {loading && renderLoading()}
      {error && <Text>An error occurred</Text>}
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
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  list: {flex: 1},
  header: {
    fontSize: 26,
  },
});

export default List;
