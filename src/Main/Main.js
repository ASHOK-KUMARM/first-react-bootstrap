import React from 'react'
import '../App.css'
import Cards from '../cards/Cards'
import s2image from '../images/s2imag.jpg'
import img3 from '../images/img3jpg.jpg'
import data from './data'

function Main(props) {

    const cardData = data.map(item => {
        return (
            <Cards 
                key = {item.id}
                {...item}
                bg={props.mode}
            />
        )
    })
    
  return (
    <div>
        <div className='main p-3 m-0'>
            <div  className="row col-md-6">
                <p className='heading'>
                    this is my first react-bootstrap project
                </p>
                <p className='main--des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, nostrud exercitation ullamco laboris.
                </p>
                <div className='main--btns'>
                    <button className='btn btn-primary rounded-0' >Start Now</button>
                    <button className='btn btn-secondary ms-2 rounded-0' >Read More</button>
                </div>
            </div>
            <div className='mt-3 mb-3 p-0'>
                <img src={img3} alt='...' width='100%'/>
            </div>
            <div className='cards--container'>
                {cardData }
            </div>
        </div>
            <div className='section-2 mt-0'>
                <img src={s2image} alt='section-1-img'/>
            </div>
            <div className='section--3 text-center p-4'>
                <p>Some Text</p>
                <p className=' p-4 m-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, nostrud exercitation ullamco laboris.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, nostrud exercitation ullamco laboris.
                </p>
            </div>
    </div>
  )
}

export default Main
