import { updateTimes } from '../components/Main';

describe('updateTimes reducer', () => {
  it('should handle UPDATE_TIMES action', () => {
    const initialState = ['10:00', '11:00', '12:00'];
    const action = { type: 'UPDATE_TIMES', payload: ['13:00', '14:00', '15:00'] };

    expect(updateTimes(initialState, action)).toEqual(['13:00', '14:00', '15:00']);
  });

  it('should handle unknown action type', () => {
    const initialState = ['10:00', '11:00', '12:00'];
    const action = { type: 'UNKNOWN_ACTION' };

    expect(updateTimes(initialState, action)).toEqual(initialState);
  });
});
