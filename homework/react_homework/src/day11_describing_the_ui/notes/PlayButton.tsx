import { Button } from "./Button";

export function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play {movieName}</Button>; // which will show play play good movie
  //   return <Button onClick={handlePlayClick} children={movieName} />; which will show play good movie
  // in both case , they do pass children property to Button components
}
