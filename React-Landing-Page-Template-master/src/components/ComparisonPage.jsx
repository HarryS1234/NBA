import React, { useState } from "react";

const ComparisonPage = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [playerData1, setPlayerData1] = useState(null);
  const [playerData2, setPlayerData2] = useState(null);

  const handleSearch = async () => {
    const response1 = await fetch(`https://any-api.com/nba_com/nba_com/docs/API_Description/player/${player1}`);
    const data1 = await response1.json();
    setPlayerData1(data1);

    const response2 = await fetch(`https://any-api.com/nba_com/nba_com/docs/API_Description/player/${player2}`);
    const data2 = await response2.json();
    setPlayerData2(data2);
  };

  return (
    <div className="container">
      <h1>Player Comparison</h1>
      <input 
        type="text" 
        value={player1} 
        onChange={(e) => setPlayer1(e.target.value)} 
        placeholder="Enter first player name" 
      />
      <input 
        type="text" 
        value={player2} 
        onChange={(e) => setPlayer2(e.target.value)} 
        placeholder="Enter second player name" 
      />
      <button onClick={handleSearch}>Search</button>
      {playerData1 && playerData2 && (
        <div>
          <h2>Comparison</h2>
          <div>
            <h3>{playerData1.name}</h3>
            <p>{playerData1.stats}</p>
          </div>
          <div>
            <h3>{playerData2.name}</h3>
            <p>{playerData2.stats}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
