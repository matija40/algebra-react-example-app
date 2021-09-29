import { getRandomColor, getRandomName } from "../random";
import Greet from "./Greet";

export default function UserInfo() {
  const color = getRandomColor();

  return (
    <Greet greeting="Hello" name={getRandomName()}>
      (Color: <span style={{ color: color }}>{color}</span>)
    </Greet>
  );
}
