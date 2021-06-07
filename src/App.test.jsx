import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      categories: [],
      regions: [],
      selectedRestaurants: [],

      selected: {
        category: { id: null },
      },
    },
  }));

  it('fetches categories and regions', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
