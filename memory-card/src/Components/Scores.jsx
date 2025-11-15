export default function Scores({ userScore, highestScore }) {
  return (
    <div className="scores">
      <h3 className="currentScore">Current Score: {userScore}</h3>
      <h3 className="highestScore">Highest Score: {highestScore}</h3>
    </div>
  );
}
