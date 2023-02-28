import { useEffect, useState } from 'react';

function Contestants() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('https://probst-disco.pythonanywhere.com/stats/')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='bubblebox'>
      <h2>Contestants:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stats.map((person, index) => (
          <div key={index} className='lilbubble'>
            <div className='grid grid-cols-1'>
              <div className='font-bold'>{person.name}: {person.count} selection</div>
              
            </div>
            <img className='w-1/2 h-auto' src={'/images/'+person.name + '.jpg'} /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contestants;
