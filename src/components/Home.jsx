
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('https://probst-disco.pythonanywhere.com/messages')
      .then(response => response.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div className='bubblebox'>
      
      {/* <ul>
        {messages.map(message => (
          <li key={message.id}>
            <div className='bubblebox'>({message.date}): {message.message}  </div>
          </li>
        ))}
      </ul> */}
      
      <div className='sofaheader'> Welcome to Tribal Couch aka Sofa Survivor 2023. </div>

      <div className='p-3'>Who will win Survivor 44? (first episode debuts March1)</div>

      <li className='lilbubble'>Instructions
        <ul>*Choose a name, a energy (for fun), and your 3 favorite contestants on the TV show. This is your Sofa Tribe.</ul>
        <ul>*Entry fee is $100. All entry fees will be awarded to the winning tribe. If multiple tribes pick the winner, the prize pool is divided proportionally. Payment must be made outside of this website somehow.</ul>
        <ul>*The deadline to submit entries is when episode #2 of the show is aired, the evening of March 8.</ul>
        <ul>*If you need to modify your entry before the deadline, just make a new tribe. I will manually delete 'unwanted' tribes based on which entries are paid for.</ul>
      </li>

      <Link to='/new' className='bg-blue-500 w-full drop-shadow-lg hover:bg-blue-600' >SELECT YOUR TEAM &rarr;&rarr;</Link>
    </div>
  );
}

export default Home