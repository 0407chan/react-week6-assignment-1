import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('HomePage를 출력한다.', () => {
    render(<HomePage />);
  });
});
