import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApolloProvider} from '@apollo/client';
import client from '@services/apollo';
import List from './index';
import {MockedProvider} from '@apollo/client/testing';
import {GET_LIST} from '@hooks/index';

describe('list of items tests', () => {
  const mocks = [
    {
      request: {
        query: GET_LIST,
        variables: {
          search: '',
        },
      },
      result: {
        data: {
          starships: [],
          persons: [],
          planets: [
            {
              name: 'Alderaan',
              id: 'cj0o7m30ms0gk01726hgbrd0s',
              population: 2000000000,
              gravity: '1 standard',
            },
          ],
        },
      },
    },
  ];
  it('renders List loading correctly', async () => {
    const {findByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <List />
      </MockedProvider>,
    );
    await findByTestId('listLoadingID');
  });

  it('renders List success correctly', async () => {
    const {findByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <List />
      </MockedProvider>,
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    await findByTestId('listID');
  });
});
