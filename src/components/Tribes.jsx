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
          <li key={index} className='lilbubble max-w-50 max-h-50  '>
            <div className='grid grid-cols-1 md:grid-cols-2 inline-block align-middle'>

              <div className=''>
                <strong>{tribe.tribename}</strong> - {tribe.catchphrase}<br />
                [{tribe.pick1}, {tribe.pick2}, {tribe.pick3}] <br />
                
              </div>

              <div className='grid grid-cols-3'>
              <img src={'images/'+tribe.pick1 + '.jpg'} />
              <img src={'images/'+tribe.pick2 + '.jpg'} />
              <img src={'images/'+tribe.pick3 + '.jpg'} />
                
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tribes;
