import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {PersonItem} from './index';

import {Person} from '@services/interfaces';

const person: Person = {
  id: 'cj0nv9phmewhy0130he5s0k5r',
  name: 'Ackbar',
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
  __typename: 'Person',
};

it('Person Item Snapshot renders correctly', () => {
  const tree = renderer.create(<PersonItem person={person} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Person Item render in list correctly', async () => {
  const {findByTestId} = render(<PersonItem person={person} />);

  await waitFor(() => findByTestId('personItem'));
});
