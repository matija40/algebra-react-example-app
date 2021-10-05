import { useState } from "react";
import PropTypes from "prop-types";
import "./MessageForm.css";
import TextInput from "../TextInput";

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({
    message: "",
    isImportant: false,
    title: "",
  });

  const setMessage = (event) => {
    setState((currentState) => {
      return { ...currentState, message: event.target.value };
    });
  };

  const setTitle = (event) => {
    setState((currentState) => {
      return { ...currentState, title: event.target.value };
    });
  };

  const setIsImportant = (event) => {
    setState({ ...state, isImportant: event.target.checked });
  };

  const sendMessage = (event) => {
    event.preventDefault();
    onSendMessage(state);
  };

  return (
    <form className="MessageForm" onSubmit={sendMessage}>
      <div className="MessageForm__row">
        <input
          type="text"

          placeholder="Title"
        />
      </div>
      <div className="MessageForm__row">
        <input
          type="text"
          onChange={setMessage}
          value={state.message}
          placeholder="Message"
        />
      </div>
      <div className="MessageForm__row">
        <label>
          <input
            type="checkbox"
            onChange={setIsImportant}
            value="isImportant"
            checked={state.isImportant}
          />
          Important
        </label>
      </div>
      <TextInput
        label={<div>Title:</div>}
        onChange={setTitle}
        value={state.title}
        inputProps={{ name: "title", id: "title", placeholder: "Title" }} />
      <div className="MessageForm__row">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

MessageForm.propTypes = {
  onSendMessage: PropTypes.func,
};
