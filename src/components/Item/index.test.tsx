import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {Item} from './index';

import {Entity} from '@services/interfaces';

const itemStarship: Entity = {
  id: 'cj0nwtqudq53b0114s5id3anc',
  name: 'A-wing',
  __typename: 'Starship',
};

const itemPerson: Entity = {
  id: 'cj0nwtqudq53b0114s5id3anc',
  name: 'A-wing',
  __typename: 'Person',
};

it('Item render in list correctly', async () => {
  const {findByTestId} = render(<Item item={itemStarship} isDetail={false} />);

  await waitFor(() => findByTestId('itemID'));
});

it('Item button press in list working correctly', async () => {
  const {findByTestId} = render(<Item item={itemPerson} isDetail={false} />);

  const button = await findByTestId('itemBtn');
  fireEvent.press(button);
});

it('Item button press in detail working correctly', async () => {
  const {findByTestId} = render(<Item item={itemPerson} isDetail={true} />);

  const button = await findByTestId('itemBtn');
  fireEvent.press(button);
});
