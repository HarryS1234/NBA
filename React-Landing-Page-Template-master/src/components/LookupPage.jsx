import React, { useState } from 'react';

const LookupPage = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerDetails, setPlayerDetails] = useState(null);
  const [error, setError] = useState(null);

  const fetchPlayerDetails = async (name) => {
    const url = `https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo?playerName=${name}&statsToGet=averages`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '11dfc15afdmshe9dba00261da94cp1f2788jsnc794f255f893',
        'x-rapidapi-host': 'tank01-fantasy-stats.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log('Player Details Response:', result);

      if (result.body && result.body.length > 0) {
        setPlayerDetails(result.body[0]);
      } else {
        setError('No details found for the given player name');
      }
    } catch (error) {
      console.error('Error fetching player details:', error);
      setError('An error occurred while fetching player details');
    }
  };

  const handleSearch = async () => {
    setPlayerDetails(null);
    setError(null);
    await fetchPlayerDetails(playerName);
  };

  return (
    <div className="container">
      <h1>NBA Player Look-up</h1>
      <div className="search-container">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter player name (e.g., LeBron James)"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {playerDetails && (
        <div className="player-details">
          {playerDetails.nbaComHeadshot && (
            <img
              src={playerDetails.nbaComHeadshot}
              alt="Player Headshot"
              className="player-headshot"
            />
          )}
          <h2>{playerDetails.longName}</h2>
          <p>Team: {playerDetails.team}</p>
          <p>Position: {playerDetails.pos}</p>
          <p>Height: {playerDetails.height}</p>
          <p>Weight: {playerDetails.weight}</p>
          <p>Birthdate: {playerDetails.bDay}</p>
          {playerDetails.stats && (
            <div className="player-stats">
              <h2>Player Statistics</h2>
              <p>Points per Game (PPG): {playerDetails.stats.pts || 'N/A'}</p>
              <p>Rebounds: {playerDetails.stats.reb || 'N/A'}</p>
              <p>Assists: {playerDetails.stats.ast || 'N/A'}</p>
              <p>Field Goals Made (FGM): {playerDetails.stats.fgm || 'N/A'}</p>
              <p>Field Goals Attempted (FGA): {playerDetails.stats.fga || 'N/A'}</p>
              <p>Field Goal Percentage (FG%): {playerDetails.stats.fgp || 'N/A'}</p>
              <p>Free Throws Made (FTM): {playerDetails.stats.ftm || 'N/A'}</p>
              <p>Free Throws Attempted (FTA): {playerDetails.stats.fta || 'N/A'}</p>
              <p>Free Throw Percentage (FT%): {playerDetails.stats.ftp || 'N/A'}</p>
              <p>Three Pointers Made (3PM): {playerDetails.stats.tptfgm || 'N/A'}</p>
              <p>Three Pointers Attempted (3PA): {playerDetails.stats.tptfga || 'N/A'}</p>
              <p>Three Point Percentage (3P%): {playerDetails.stats.tptfgp || 'N/A'}</p>
              <p>Offensive Rebounds (OREB): {playerDetails.stats.OffReb || 'N/A'}</p>
              <p>Defensive Rebounds (DREB): {playerDetails.stats.DefReb || 'N/A'}</p>
              <p>Total Rebounds (REB): {playerDetails.stats.reb || 'N/A'}</p>
              <p>Personal Fouls (PF): {playerDetails.stats.PF || 'N/A'}</p>
              <p>Steals: {playerDetails.stats.stl || 'N/A'}</p>
              <p>Turnovers: {playerDetails.stats.TOV || 'N/A'}</p>
              <p>Blocks: {playerDetails.stats.blk || 'N/A'}</p>
              <p>Plus/Minus (+/-): {playerDetails.stats.plusMinus || 'N/A'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LookupPage;
