import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/theme-context";

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit } = props;

  const theme = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }

  return (
    <React.Fragment>
      <h1>Ticket Details</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button style={styles} onClick={() => onClickingEdit(ticket.id)}>Update Ticket</button>
      <br/>
      <button style={styles} onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;