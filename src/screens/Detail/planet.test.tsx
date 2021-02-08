import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import Detail from './index';
import {GET_PLANET_DETAIL} from '@hooks/index';

// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
//   useRoute: () => ({
//     params: {
//       item: {
//         name: 'Alderaan',
//         id: 'cj0o7m30ms0gk01726hgbrd0s',
//         __typename: 'Planet',
//       },
//     },
//   }),
// }));

describe('Detail render component as Planet', () => {
  const mocks = [
    {
      request: {
        query: GET_PLANET_DETAIL,
        variables: {
          id: 'cj0o7m30ms0gk01726hgbrd0s',
        },
      },
      result: {
        data: {
          planet: {
            name: 'Alderaan',
            id: 'cj0o7m30ms0gk01726hgbrd0s',
            population: 2000000000,
            gravity: '1 standard',
            __typename: 'Planet',
          },
        },
      },
    },
  ];
  it('renders Detail loading for Planet correctly', async () => {
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
      useRoute: () => ({
        params: {
          item: {
            id: 'cj0o7m30ms0gk01726hgbrd0s',
            name: 'Alderaan',
            __typename: 'Planet',
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

  it('renders Detail success for planet correctly', async () => {
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({goBack: jest.fn(), navigate: jest.fn()}),
      useRoute: () => ({
        params: {
          item: {
            id: 'cj0o7m30ms0gk01726hgbrd0s',
            name: 'Alderaan',
            __typename: 'Planet',
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
