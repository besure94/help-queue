import * as actions from './../../actions';
import * as constants from '../../actions/ActionTypes';

describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: constants.DELETE_TICKET,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action.', () => {
    expect(actions.toggleForm()).toEqual({
      type: constants.TOGGLE_FORM
    });
  });

  it('addTicket should create ADD_TICKET action.', () => {
    expect(actions.addTicket({
      names: 'John and Don',
      location: '3E',
      issue: 'Redux not working.',
      id: 1
    })).toEqual({
      type: 'ADD_TICKET',
      names: 'John and Don',
      location: '3E',
      issue: 'Redux not working.',
      id: 1
    });
  });
});