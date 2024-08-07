import React, { useState } from "react";

const DuelPage = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [score, setScore] = useState(0);

  const handleDuel = async () => {
    const response1 = await fetch(`https://any-api.com/nba_com/nba_com/docs/API_Description/random`);
    const data1 = await response1.json();
    setPlayer1(data1);

    const response2 = await fetch(`https://any-api.com/nba_com/nba_com/docs/API_Description/random`);
    const data2 = await response2.json();
    setPlayer2(data2);
  };

  const checkAnswer = (answer) => {
    if (answer) {
      setScore(score + 1);
    } else {
      setScore(0);
    }
    handleDuel();
  };

  return (
    <div className="container">
      <h1>NBA Duel</h1>
      <button onClick={handleDuel}>Start Duel</button>
      {player1 && player2 && (
        <div>
          <h2>Who has a higher career stat?</h2>
          <div>
            <h3>{player1.name}</h3>
            <button onClick={() => checkAnswer(player1.stats > player2.stats)}>Player A</button>
          </div>
          <div>
            <h3>{player2.name}</h3>
            <button onClick={() => checkAnswer(player2.stats > player1.stats)}>Player B</button>
          </div>
          <div>
            <h3>Score: {score}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default DuelPage;
