import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import Detail from './index';
import {GET_PERSON_DETAIL} from '@hooks/index';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
  useRoute: () => ({
    params: {
      item: {
        id: 'cj0nv9phmewhy0130he5s0k5r',
        name: 'Ackbar',
        __typename: 'Person',
      },
    },
  }),
}));

describe('Detail render component as Person', () => {
  const mocks = [
    {
      request: {
        query: GET_PERSON_DETAIL,
        variables: {
          id: 'cj0nv9phmewhy0130he5s0k5r',
        },
      },
      result: {
        data: {
          person: {
            name: 'Ackbar',
            id: 'cj0nv9phmewhy0130he5s0k5r',
            height: 180,
            mass: 83,
            films: [
              {
                id: 'cj0nxmy5ega600114uiw05wle',
                title: 'Return of the Jedi',
              },
              {
                id: 'cj0nxmy69ga640114e3eb7bn2',
                title: 'The Force Awakens',
              },
            ],
            homeworld: {
              id: 'cj0o7m3bts0qg0172bjionq4d',
              name: 'Mon Cala',
            },
            __typename: 'Person',
          },
        },
      },
    },
  ];
  it('renders Detail loading for person correctly', async () => {
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
      useRoute: () => ({
        params: {
          item: {
            id: 'cj0nv9phmewhy0130he5s0k5r',
            name: 'Ackbar',
            __typename: 'Person',
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

  it('renders Detail success for person correctly', async () => {
    const {findByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Detail />
      </MockedProvider>,
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    await findByTestId('typeDetailId');
  });
});
