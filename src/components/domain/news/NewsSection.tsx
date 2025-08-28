import GetYourMoves from "./GetYourMoves";
import NewsList from "./NewsList";

export default function NewsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NewsList />
      <GetYourMoves />
    </div>
  );
}
