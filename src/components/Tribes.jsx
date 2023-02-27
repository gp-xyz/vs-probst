import { useEffect, useState } from 'react';

function Tribes() {
  const [tribes, setTribes] = useState([]);

  useEffect(() => {
    fetch('https://probst-disco.pythonanywhere.com/tribes/')
      .then(response => response.json())
      .then(data => setTribes(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='bubblebox'>
      <h2>Tribes:</h2>
      <ul>
        {tribes.map((tribe, index) => (
          <li key={index} className='lilbubble'>
            <strong>{tribe.tribename}</strong> - {tribe.catchphrase}<br />
            Picks: {tribe.pick1}, {tribe.pick2}, {tribe.pick3}<br />
            Remains: {tribe.remains}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tribes;
