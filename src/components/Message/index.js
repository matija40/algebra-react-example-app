import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate";
import "./Message.css";

export default function Message({ isImportant, message, title }) {
  if (message === "" || message == null) {
    return null;
  }

  let className = "message";
  if (isImportant) className += " message--important";

  return (
    <div className={className}>
      <div>{title}</div>
      <div>
        <UserInfo />
      </div>
      <div>
        <UniqueId />
      </div>
      <div>{message}</div>
      <div>
        <CurrentDate />
      </div>
    </div>
  );
}
