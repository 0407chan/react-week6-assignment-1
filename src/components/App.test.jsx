import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

import App from './App';

jest.mock('react-redux');
jest.mock('../services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  function renderApp() {
    return render(<App />);
  }

  it('App이 렌더링 된다.', () => {
    renderApp();
  });
});
