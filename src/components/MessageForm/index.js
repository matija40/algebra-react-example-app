import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import FormButton from "../FormButton";
import "./MessageForm.css";
import TextInput from "../TextInput";

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({
    message: "",
    isImportant: false,
    title: "",
  });

  const handleOnChange = (event) => {
    let value = undefined;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setState((currentState) => {
      return { ...currentState, [event.target.name]: value };
    });
  }

  const sendMessage = (event) => {
    event.preventDefault();
    onSendMessage(state);
  };

  return (
    <form className="MessageForm" onSubmit={sendMessage}>
      <div className="MessageForm__row">
<<<<<<< HEAD
        <input
          type="text"

          placeholder="Title"
=======
        <TextInput
          label={<div>Title:</div>}
          onChange={handleOnChange}
          value={state.title}
          inputProps={{
            name: "title", id: "title", placeholder: "Title"
          }}
>>>>>>> 092e15ab7fb33f9bc609c87ccfb2474db6c3ddad
        />
      </div>
      <div className="MessageForm__row">
        <TextInput
          label={<div>Message:</div>}
          onChange={handleOnChange}
          value={state.message}
          inputProps={{
            name: "message", id: "message", placeholder: "Message"
          }}
        />
      </div>
      <div className="MessageForm__row">
        <Checkbox
          label="Important"
          onChange={handleOnChange}
          value="isImportant"
          checked={state.isImportant}
          inputProps={{
            name: "isImportant", id: "is-important"
          }}
        />
      </div>
      <TextInput
        label={<div>Title:</div>}
        onChange={setTitle}
        value={state.title}
        inputProps={{ name: "title", id: "title", placeholder: "Title" }} />
      <div className="MessageForm__row">
        <FormButton type="submit">Send</FormButton>
      </div>
    </form>
  );
}

MessageForm.propTypes = {
  onSendMessage: PropTypes.func,
};
