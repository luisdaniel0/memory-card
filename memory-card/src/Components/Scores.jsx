export default function Scores({ userScore, highestScore }) {
  return (
    <div className="scores">
      <p className="currentScore">Current Score: {userScore}</p>
      <p className="highestScore">Highest Score: {highestScore}</p>
    </div>
  );
}
