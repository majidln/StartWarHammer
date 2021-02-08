import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import Detail from './index';
import {GET_STARSHIP_DETAIL} from '@hooks/index';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
  useRoute: () => ({
    params: {
      item: {
        id: 'cj0nwtqudq53b0114s5id3anc',
        name: 'A-wing',
        __typename: 'Starship',
      },
    },
  }),
}));

describe('Detail render component as Starship', () => {
  const mocks = [
    {
      request: {
        query: GET_STARSHIP_DETAIL,
        variables: {
          id: 'cj0nwtqudq53b0114s5id3anc',
        },
      },
      result: {
        data: {
          starship: {
            id: 'cj0nwtqudq53b0114s5id3anc',
            name: 'A-wing',
            crew: 1,
            length: 9.6,
            films: [
              {
                id: 'cj0nxmy5ega600114uiw05wle',
                title: 'Return of the Jedi',
              },
            ],
            __typename: 'Starship',
          },
        },
      },
    },
  ];
  it('renders Detail loading for Starship correctly', async () => {
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
      useRoute: () => ({
        params: {
          item: {
            id: 'cj0nwtqudq53b0114s5id3anc',
            name: 'A-wing',
            __typename: 'Starship',
          },
        },
      }),
    }));
    const {findByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Detail />
      </MockedProvider>,
    );
    await findByTestId('detailLoadingId');
  });

  it('renders Detail success for starship correctly', async () => {
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
      useRoute: () => ({
        params: {
          item: {
            id: 'cj0nwtqudq53b0114s5id3anc',
            name: 'A-wing',
            __typename: 'Starship',
          },
        },
      }),
    }));
    const {findByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Detail />
      </MockedProvider>,
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    await findByTestId('typeDetailId');
  });
});
