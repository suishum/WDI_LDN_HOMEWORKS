import React from 'react';

const Buttons = ({ handleChoice }) => {
  return(
    <div className="buttons flex">
      <button value="rock" onClick={handleChoice}>
        <img src="../assets/img/rock.svg"></img>
      </button>
      <button value="paper" onClick={handleChoice}>
        <img src="../assets/img/paper.svg"></img>
      </button>
      <button value="scissors" onClick={handleChoice}>
        <img src="../assets/img/scissors.svg"></img>
      </button>
    </div>
  );
};

export default Buttons;
