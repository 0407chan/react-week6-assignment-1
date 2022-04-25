import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('HomePage를 출력한다.', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
  });
});
