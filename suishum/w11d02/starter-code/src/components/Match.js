import React from 'react';

const Match = ({ playerPick, opponentPick }) => {
  return(
    <div className="flex">
      <div className="">
        <h3 className="center">You</h3>
        {playerPick && <img src={`../assets/img/${playerPick}.svg`}></img>}
      </div>
      <div className="padtop">
        <h3>vs</h3>
      </div>
      <div className="center">
        <h3>Them</h3>
        {opponentPick && <img src={`../assets/img/${opponentPick}.svg`}></img>}
      </div>
    </div>
  );
};

export default Match;
