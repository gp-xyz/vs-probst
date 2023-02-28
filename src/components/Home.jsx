
import React, { useState, useEffect } from 'react';


function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('https://probst-disco.pythonanywhere.com/messages')
      .then(response => response.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div>
      
      {/* <ul>
        {messages.map(message => (
          <li key={message.id}>
            <div className='bubblebox'>({message.date}): {message.message}  </div>
          </li>
        ))}
      </ul> */}
      Welcome to Tribal Couch aka Sofa Survivor 2023. 

      Who will win Survivor 44? (first episode debuts March1).

**Choose a name, a catchphrase, and your 3 favorite contestants on the TV show. This is your Sofa Tribe.
**Entry fee is $100. All entry fees will be awarded to the winning tribe. If multiple tribes pick the winner, the prize pool is divided proportionally. Payment must be made outside of this website somehow.
**The deadline to submit entries is when episode #2 of the show is aired, the evening of March 8.
**If you need to modify your entry before the deadline, just make a new tribe. I will manually delete 'unwanted' tribes based on which entries are paid for.
    </div>
  );
}

export default Home