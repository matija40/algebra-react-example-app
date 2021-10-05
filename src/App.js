import "./App.css";
import MessageForm from "./components/MessageForm";
import { useState } from "react";
import Message from "./components/Message";
import { getId } from "./helpers";

const numbers = [1, 2, 3, 4];
const numberElements = numbers.map(number =>
  ({ key: getId(), value: number })
);

function App() {
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject]);
  }

  return (
    <div className="App">
      {numberElements.map((numberElement) =>
        <button key={numberElement.key}>
          {numberElement.value}
        </button>
      )}
      <header className="App-header">
        <h1>My Chat App</h1>
        {messageObjects.length === 0 && <p>No messages</p>}
        {messageObjects.map((messageObject, index) =>
          <Message
            key={index}
            isImportant={messageObject.isImportant}
            message={messageObject.message}
            title={messageObject.title}
          />
        )}
        <MessageForm onSendMessage={handleSendMessage} />
        <a
          className="App-link"
          href="https://github.com/dstrekelj"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub Profile
        </a>
      </header>
    </div>
  );
}

export default App;