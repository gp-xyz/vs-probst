
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
      
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <div className='bubblebox'>({message.date}): {message.message}  </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home