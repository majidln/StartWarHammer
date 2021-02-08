import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, waitFor} from '@testing-library/react-native';
import {StarshipItem} from './index';

import {Starship} from '@services/interfaces';

const starship: Starship = {
  name: 'A-wing',
  id: 'cj0nwtqudq53b0114s5id3anc',
  crew: 1,
  length: 9.6,
  films: [
    {
      id: 'cj0nxmy5ega600114uiw05wle',
      title: 'Return of the Jedi',
    },
  ],
  __typename: 'Starship',
};

it('Starship Item Snapshot renders correctly', () => {
  const tree = renderer.create(<StarshipItem starship={starship} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Starship Item render in list correctly', async () => {
  const {findByTestId} = render(<StarshipItem starship={starship} />);

  await waitFor(() => findByTestId('starshipId'));
});
