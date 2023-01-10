import React from 'react'
import '../App.css'


function Footer(props) {
  return (
    <div className="container-fluid bg-dark footer pb-4">
        <div className='row footer--row'>
            <div className='col-md-4 pb-2'>
            <div>
                <h4>COMPANY NAME</h4>
                <p> 
                    Lorem ipsum is a placeholder text commonly used to 
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may 
                    be used as a placeholder before final copy is available.
                </p>
            </div>
            </div>
            <div className='col-md-4 text-center pb-4'>
                <h4 className='c-heading'>PRODUCTS</h4>
                <div className='footer--link-conatiner '>
                    <span className='footer--links'>
                        <a href='https://html.com'>HTML</a>
                    </span>
                    <span className='footer--links'>
                        <a href='https://html.com'>CSS</a>
                    </span>
                    <span className='footer--links'>
                        <a href='https://html.com'>BOOTSTARP</a>
                    </span>
                    <span  className='footer--links'>
                        <a href='https://html.com'>REACT JS</a>
                    </span>
                </div>
            </div>
            <div className='col-md-4 text-center'>
                <h4 className='c-heading'>PRODUCTS</h4>
                <div className='footer--link-conatiner'>
                    <span className='footer--links'>
                        <a href='https://html.com'>HTML</a>
                    </span>
                    <span className='footer--links'>
                        <a href='https://html.com'>CSS</a>
                    </span>
                    <span className='footer--links'>
                        <a href='https://html.com'>BOOTSTARP</a>
                    </span>
                    <span  className='footer--links'>
                        <a href='https://html.com'>REACT JS</a>
                    </span>
                </div>
            </div>
        </div>
    </div>

      )
    }
    
    export default Footer

