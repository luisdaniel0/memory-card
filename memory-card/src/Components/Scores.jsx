export default function Scores({ userScore, highestScore }) {
  return (
    <div className="currentScore">
      <h3>Current Score: {userScore}</h3>
      <h3>Highest Score: {highestScore}</h3>
    </div>
  );
}
