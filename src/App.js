import React from 'react'
import Card from './Card'
import contacts from './contects'



function createCard(contact){
  return <Card 
    key={contact.id}
    imgSrc={contact.avatarImg}
    name={contact.name}
    address={contact.address}
    phone={contact.phone}
    birthday={contact.birthday}
    email={contact.email}
    lastDate={contact.lastDate}
    quote={contact.quote}
    quoteAuthor={contact.quoteAuthor}
    score={contact.score}
  />
}
export default function App() {
  return ( 
    <div>
      {contacts
      .map(createCard)
      .sort((a,b) => b.score - a.score)}
    </div>
  )
}