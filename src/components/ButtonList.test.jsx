import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

describe('buttonList', () => {
  context('when nothing is selected', () => {
    it('renders buttons with name', () => {
      const names = ['서울', '경기', '부산', '제주'];
      const selected = null;

      const handleClick = jest.fn();

      const { getAllByRole, queryByText } = render(
        <ButtonList
          names={names}
          onClick={handleClick}
          selected={selected}
        />,
      );

      expect(getAllByRole('button')).toHaveLength(names.length);
      expect(queryByText(/(V)/)).not.toBeInTheDocument();
    });
  });

  context('when something is selected', () => {
    it('renders buttons and adds (V) to selected one', () => {
      const names = ['서울', '경기', '부산', '제주'];
      const selected = '서울';

      const handleClick = jest.fn();

      const { getAllByRole, getByText } = render(
        <ButtonList
          names={names}
          onClick={handleClick}
          selected={selected}
        />,
      );

      expect(getAllByRole('button')).toHaveLength(names.length);
      expect(getByText('서울(V)')).toBeInTheDocument();
    });
  });
});
