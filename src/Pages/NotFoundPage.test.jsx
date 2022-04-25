import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('NotFoundPage를 출력한다.', () => {
    render(<NotFoundPage />);
  });
});
