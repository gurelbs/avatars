import React, {useState} from 'react'
import './App.css';

export default function Card(props) {

  let [click, setClick] = useState(props.score);


  return (  
    <div className="card card-container row border-0">
      <div className="bg-dark text-light row px-0 mx-0">
        <div className="col-4">
          <img className="card-img-top px-0 mx-0" alt="avatar" src={props.imgSrc}/>
        </div>
        <div className="card-body p-0 col-8">
          <h5 className="card-name col-12 pt-5">{props.name}</h5>
        </div>
        <div className="card-text col-7">
          <blockquote className="blockquote">
            <p className="mb-0">{props.quote}</p>
            <footer className="blockquote-footer">{props.quoteAuthor}</footer>
          </blockquote>
        </div>
        <div className="card-text col-5">
          <p className="p mb-0 mini-text address border-bottom py-1">
            <i className="fas fa-home"></i>&nbsp;
           {props.address}</p>
          <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
            <i className="fas fa-phone-alt"></i>&nbsp;
          {props.phone}</p>
          <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
            <i className="fas fa-birthday-cake"></i>&nbsp;
          {props.birthday}</p>
          <p className="p mini-text card-text mb-0 ml-1 border-bottom py-1">
            <i className="fas fa-mail-bulk"></i>&nbsp;
          {props.email}</p>
        </div>
        <button onClick={()=> setClick(click+1)} type="button" className="btn btn-lg btn-outline-light border-0  col-2 like-btn">
           <span><i className="far fa-thumbs-up"></i> </span>
          <span className="badge">
          {click}
          </span>
        </button>
        <p className="badge my-auto text-muted col-9 pb-0 mb-0">Last Update: <span className="font-weight-light">{new Date().toLocaleString()}</span></p>     
      </div>       
    </div>  
  )
}


