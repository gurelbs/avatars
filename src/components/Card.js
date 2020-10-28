import React from 'react'
import './App.css';
export default function Card(props) {
  return (

    <div>
{props.cards.map((card,key) => {
        return ( 
        <div key={key} className="card card-container row border-0">
          <div className="bg-dark text-light row px-0 mx-0">
          <div className="col-4">
            <img className="card-img-top px-0 mx-0" alt="avatar" src={card.avatarImg}/>
          </div>
          <div className="card-body p-0 col-8">
            <h5 className="card-name col-12">{card.name}</h5>
          </div>
          <div className="text-quote  col-md-6 pt-3">
            <blockquote className="blockquote">
              <p className="mb-0">{card.quote}</p>
              <footer className="blockquote-footer">{card.quoteAuthor}</footer>
            </blockquote>
          </div>
          <div className="card-text col-md-6 pb-2">
            <p className="p mb-0 mini-text address border-bottom py-1">
              <i className="fas fa-home"></i>&nbsp;
             {card.address}</p>
            <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
              <i className="fas fa-phone-alt"></i>&nbsp;
            {card.phone}</p>
            <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
              <i className="fas fa-birthday-cake"></i>&nbsp;
            {card.birthday}</p>
            <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
              <i className="fas fa-mail-bulk"></i>&nbsp;
            {card.email}</p>
          </div>
          <button 
          onClick={() => {
            props.scoreUp(key);
          }} 
          type="button" 
          className=" badge btn btn-sm btn-outline-light border-0 mx-2 col-2 like-btn shadow-none">
            <span><i className="far fa-thumbs-up"></i>&nbsp;&nbsp;</span>
          {card.score}</button>
          <p className="badge my-auto text-muted col-9 pb-0 mb-0 ltr">Last Update:&nbsp;
          <span className="font-weight-light">{!card.update ? 'Not updated yet' : card.update}</span>
          </p>     
          </div>
        </div> 
        )
      })}
    </div>
  )
}


