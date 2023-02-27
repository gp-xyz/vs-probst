import React, { useState } from 'react';

function Picker(props) {
  const [picks, setPicks] = useState([]);

  function handlePick(contestant) {
    const newPicks = [...picks, contestant];
    if (newPicks.length > 3) {
      newPicks.shift();
    }
    setPicks(newPicks);
    props.OnPick(newPicks);
  }

  return (
    <div className='lilbubble'>
      <h2>Pick 3 contestants:</h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6 xl:grid-cols-9">
        {props.contestants.map((contestant) => (
          <div
            key={contestant.id}
            className={
              picks.includes(contestant)
                ? 'picked'
                : 'pickreg'
            }
            onClick={() => handlePick(contestant)}
          >
            <img
              src={'images/' + contestant.name + '.jpg'}
              alt={contestant.name}
              className="w-full h-auto"
            />
            <p className="text-center">{contestant.name}</p>
          </div>
        ))}
      </div>
      {picks.length === 3 ? null : <p className="text-red-600">Pick {3 - picks.length} more contestants</p>}
    </div>
  );
}

export default Picker;
