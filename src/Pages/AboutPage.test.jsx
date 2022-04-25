import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('AboutPage를 출력한다.', () => {
    render(<AboutPage />);
  });
});
