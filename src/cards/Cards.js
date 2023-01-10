import React from 'react'
import '../App.css'

function Cards(props) {
  return (
    <div className={props.bg? "card col-md-6 mx-auto text-center rounded-0" : "bg-dark text-white mx-auto text-center p-3 rounded-0"} style={{width: 300+'px', height: 350 + 'px' }}>
        <div className={props.bg? "card-body" : "bg-dark text-white"}>
            <h5 className="card-title mb-4 mt-4">{props.title}</h5>
            <p className="card-text mb-4">{props.details}</p>
            <a href="..." className="btn btn-primary rounded-0 mt-4">{props.link}</a>
        </div>
    </div>
  )
}

export default Cards