import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Entity} from '@services/interfaces';
import {useNavigation} from '@react-navigation/native';
import t from '@services/translate';

interface Props {
  item: Entity;
  isDetail?: Boolean;
}

export const Item: React.FC<Props> = ({
  item,
  isDetail,
  children,
  ...rest
}: any) => {
  const navigation = useNavigation();
  const btnPress = () => {
    if (isDetail) {
      navigation.goBack();
    } else {
      navigation.navigate('Detail', {item});
    }
  };
  return (
    <View style={{...styles.wrapper, ...rest.style}} {...rest}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>Type: {item.__typename}</Text>
      {children}
      <TouchableOpacity style={styles.btn} onPress={btnPress}>
        <Text
          style={{...styles.btnText, ...{color: isDetail ? 'blue' : 'red'}}}>
          {t.t(`item.${isDetail ? 'backToList' : 'goToDetail'}`)}
        </Text>
      </TouchableOpacity>
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
    fontFamily: 'StarJedi',
  },
  type: {
    fontSize: 16,
    fontWeight: '400',
  },
  btn: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 4,
  },
  btnText: {
    color: 'red',
  },
});
