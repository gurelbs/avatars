import React from 'react'
import './App.css';
export default function Card(props) {
  return (
        <div key={props.key} className="card card-container row border-0">
          <div className="bg-dark text-light row px-0 mx-0">
          <div className="col-4">
            <img className="card-img-top px-0 mx-0" alt="avatar" src={props.user.avatarImg}/>
          </div>
          <div className="card-body p-0 col-8">
            <h5 className="card-name col-12">{props.user.name}</h5>
          </div>
          <div className="text-quote  col-md-6 pt-3">
            <blockquote className="blockquote">
              <p className="mb-0">{props.user.quote}</p>
              <footer className="blockquote-footer">{props.user.quoteAuthor}</footer>
            </blockquote>
          </div>
          <div className="card-text col-md-6 pb-2">
            <p className="p mb-0 mini-text address border-bottom py-1">
              <i className="fas fa-home"></i>&nbsp;
             {props.user.address}</p>
            <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
              <i className="fas fa-phone-alt"></i>&nbsp;
            {props.user.phone}</p>
            <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
              <i className="fas fa-birthday-cake"></i>&nbsp;
            {props.user.birthday}</p>
            <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
              <i className="fas fa-mail-bulk"></i>&nbsp;
            {props.user.email}</p>
          </div>
          <button 
          onClick={() => {
            props.scoreUp(props.user.id);
          }} 
          type="button" 
          className=" badge btn btn-sm btn-outline-light border-0 mx-2 col-2 like-btn shadow-none">
            <span><i className="far fa-thumbs-up"></i>&nbsp;&nbsp;</span>
          {props.user.score}</button>
          <p className="badge my-auto text-muted col-9 pb-0 mb-0 ltr">Last Update:&nbsp;
          <span className="font-weight-light">{!props.user.scoreUp ? 'Not updated yet' : props.user.scoreUp}</span>
          </p>     
          </div>
        </div> 
  )
}


