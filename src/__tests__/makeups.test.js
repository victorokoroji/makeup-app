import makeupReducer, { getAllMakeUps } from '../redux/makeups/makeups';

it('reducer should return list of makeups', () => {
  const previousState = [];
  expect(makeupReducer(previousState, getAllMakeUps())).toBeDefined();
});
