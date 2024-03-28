import * as constants from './../actions/ActionTypes';

export const deleteTicket = id => ({
  type: constants.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: constants.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: constants.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}