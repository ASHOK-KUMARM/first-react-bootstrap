import './App.css';
import Topbar from './Topbar/Topbar';
import Main from './Main/Main';
import About from './About/About';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import Practice from './Practice';
// import Practice from './Practice.js'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  function togglemode() {
    setDarkMode ( prevMode => !prevMode)
    console.log(darkMode)
  }
  
  return (
    <Router>
        <Topbar darkMode={darkMode} mode={togglemode}/>
        <Routes>
          <Route exact path='/' element={ <Main mode={darkMode}/>} />
          <Route exact path='/About' element={ <About /> }/>
          <Route exact path='/Contact' element={ <Contact /> }/>
          {/* <Route exact path='/Practice' element={ <Practice /> }/> */}
        </Routes>
        <Footer darkMode={darkMode}/>
    </Router>    
    )
  }
  
  export default App;




    // <div >
    //   < Practice />
    // </div>
//   const nums = [1, 2, 3, 4, 5];
//   const squares = nums.map(function(val) {
//     return val * val;
// })

//   const name = ['alice', 'bob', 'charlue', 'daneile']
//   const caps = name.map(item => {
//     return item[0].toUpperCase() + item.slice(1)
//   })
 
//   const tags = name.map(item => {
//     return `<p>${item}<p/>`
//   })

//   function MouseOver () {
//     console.log('Mouse hoverd')
//   }
      // <h1 className='text-white text-center'>
      //   {squares}<hr></hr>
      //   {caps}
      //   <hr></hr>
      //   <div onKeyDown={MouseOver}>
      //     {tags}
      //   </div>
      // </h1>
