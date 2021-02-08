import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, waitFor} from '@testing-library/react-native';
import {KeyValue} from './index';

it('KeyValue Snapshot renders correctly', () => {
  const tree = renderer
    .create(<KeyValue title="name" value="Majid" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('KeyValue render in list correctly', async () => {
  const {findByTestId} = render(<KeyValue title="name" value="Majid" />);

  await waitFor(() => findByTestId('keyValueId'));
});
