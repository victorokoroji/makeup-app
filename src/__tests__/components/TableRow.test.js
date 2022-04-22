import { render } from '@testing-library/react';
import TableRow from '../../components/TableRow';

it('component should render properly', () => {
  const tableRow = render(
    <TableRow name="brand" value="nyx" />,
  );
  expect(tableRow).toMatchSnapshot();
});
