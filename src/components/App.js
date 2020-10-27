import React, { useState } from 'react'
import Card from './Card'
import contacts from './contects'

export default function App() {

let [contact,setContacts] = useState({contactsArr: [...contacts]});
const score = x => {
  let cardsArr = contact.contactsArr;
  cardsArr[x].score++;
  cardsArr[x].update = new Date().toLocaleString();
  cardsArr.sort((a, b) => b.score - a.score);
  setContacts(x => ({ ...x, contactsArr: cardsArr }));
};
  return (
    <div className="m-1">
    <Card 
      key={contact.id}
      cards={contact.contactsArr}
      scoreUp={score}
    />
    </div>
  )
}