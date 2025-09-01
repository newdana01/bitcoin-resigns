import Donate from "./Donate";
import HolderList from "./HolderList";

export default function Community() {
  return (
    <div className="grid-container">
      <HolderList />
      <Donate />
    </div>
  );
}
