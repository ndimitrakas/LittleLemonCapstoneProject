import { initializeTimes, updateTimes } from '../components/Main';

// Unit test for initializeTimes function
test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  expect(initializeTimes()).toEqual(expectedTimes);
});

// Unit test for updateTimes function
test('updateTimes returns the same value that is provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES' };

  expect(updateTimes(initialState, action)).toEqual(initialState);
});
