import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MakeUpCards from '../../components/MakeUpCards';
import store from '../../redux/configureStore';

it('component should render properly', () => {
  const makeUpCard = render(
    <Provider store={store}>
      <MakeUpCards />
    </Provider>,
  );
  expect(makeUpCard).toMatchSnapshot();
});
