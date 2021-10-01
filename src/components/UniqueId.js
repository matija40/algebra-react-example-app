import { getId } from "../helpers";

export default function UniqueId() {
  return <p>UID: {getId()}</p>;
}
