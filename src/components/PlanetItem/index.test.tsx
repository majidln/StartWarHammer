import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {PlanetItem} from './index';

import {Planet} from '@services/interfaces';

const planet: Planet = {
  name: 'Alderaan',
  id: 'cj0o7m30ms0gk01726hgbrd0s',
  population: 2000000000,
  gravity: '1 standard',
  __typename: 'Planet',
};

it('Planet Item Snapshot renders correctly', () => {
  const tree = renderer.create(<PlanetItem planet={planet} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Planet Item render in list correctly', async () => {
  const {findByTestId} = render(<PlanetItem planet={planet} />);

  await waitFor(() => findByTestId('planetItem'));
});
