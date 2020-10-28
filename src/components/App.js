import React, { useState } from 'react'
import Card from './Card'
import contacts from './contects'

export default function App() {

let [contact,setContacts] = useState([...contacts]
    .sort((user1,user2) => user1.score - user2.score));
const score = id => {
  setContacts(
    contact.map(user => {
      if (user.id === id){
        return {
          ...user,
          score: user.score + 1,
          updateDate: new Date().toLocaleString()
        }
      }
      return user;
    }).sort((a, b) => b.score - a.score)
  )
};
  return <div className="m-1">
    {contact.map(user => 
      <Card 
        key={user.id}
        user={user}
        scoreUp={score}
      />
      )}
    </div>
}