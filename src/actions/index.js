import { format } from 'path';
import * as constants from './../actions/ActionTypes';

export const deleteTicket = id => ({
  type: constants.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: constants.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id, timeOpen, formattedWaitTime } = ticket;
  return {
    type: constants.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    timeOpen: timeOpen,
    formattedWaitTime: formattedWaitTime,
    id: id
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: constants.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});