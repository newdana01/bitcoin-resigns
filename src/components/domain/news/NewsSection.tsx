import GetYourMoves from "./GetYourMoves";
import NewsList from "./NewsList";

export default function NewsSection() {
  return (
    <div className="grid-container">
      <NewsList />
      <GetYourMoves />
    </div>
  );
}
