
// import React, { useState } from 'react'
// import './App.css'

// export default function Practice() {

//   const [things, setThings] = useState([])
//   const [enterdtxt, setEnteredText] = useState('')

//   function addItem() {
//     if (enterdtxt.length >= 1) {
//       setThings(prevthings => [...prevthings, enterdtxt])
//     }
//   }

//   function textChangeHandler (i) {
//     setEnteredText(i.target.value);
//   };

//   const newThings = things.map(item => <li className='m-4 bg-info w-50 h-25' key={item}>{item}</li>)
  
//   return (
//     <div class="d-flex flex-column min-vh-100"  >
//       <input className='form-control m-4 w-50' type='text' onChange={textChangeHandler}/>
//       <button className='btn btn-primary rounded-0 m-4 w-25' onClick={addItem}>Add Item</button>
//       {newThings } 
//     </div>
//   )
// }








// import React, { useEffect, useState } from 'react'
// import { Prev } from 'react-bootstrap/esm/PageItem'

// let styles = {
//     div:{
//         textAlign: 'center',
//         background: 'purple',
//         width: '80px',
//         height: '80px',
//         borderRadius: '50%',
//         paddig: '40px',
//     },
//     button : {
//         color: 'white',
//         alignItems: 'cnter',
//         background: 'blue',
//         textAlign: 'center',
//         padding: '10px',
//         width: "140px",
//     },

//     h1 : {
//         textAlign: 'center',
//         textColor: 'red'
//     }
// }




// function Practice() {
    
//     // const [memeImage, setMemeImage] = useState()
//     const [meme, setMeme] = useState({
//         topText: '',
//         bottomText: '',
//         randomImage: "http://jnds.dfkdskl.dsds"
//     })

//     function memes () {
//         setMeme(prevState => {
//             return{
//                 ...prevState,
//                 topText: '',

//             }
//         })
//     }

//     function getMemeImage () {
//         const memesarray = memesdata.data.meme
//         const randomImage = Math.floor(Math.random() * memesarray.length)
//         setMemeImage (randomImage)
//     }

//     return (
//         <div  >
//         <button className='btn btn-primary' onClick={getMemeImage}>Add Item</button>
        
//     </div>
//   )
// }

// export default Practice 


// useEffect(()=> {
//     fetch('https://api.imgflip.com/get_memes')
//         .then(res => res.json())
//         .then(data => setAllMmes(data.data.memes))
// },[])















// useEffect(() => {
//     fetch(`url`)
//         .then(res => res.json)
//         .then(data => state(data))
// }, [count])


// const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     isChecked: false
// })

// function handleChange(event) {
//     const {name, type, value, checked} = event.target
//     setFormData(...prevData => ({
//         ...prevData,
//         [name] : type === "checkbox"? checked : value
//     }))
// } 

// function handleSumbmit(event) {
//     event.preventDefault()
//     if (formData.password === formData.confirmPassword) {
//         console.log('Successefully signed up')
//     }else {
//         console.log('password do not match')
//         return
//     }

//     if (formData.isChecked) {
//         console.log ('Thanks for signing up for newsletter')
//     }
// }








// // const [messages, setMessage] = useState(["a","b"])



// // return(

// //     <div>
// //         {messages === 0 ?
// //          <p>"you're all caught up"</p> :
// //          <h1>You have {messages.length} unread 
// //          {messages.length > 1 ? 'messages' : 'message' }</h1>
// //         }
// //     </div>

// // )
// // const [squares, setSquare] = useState(boxes)

// // function toggleClick() {
// //     setSquare(prevState => {
// //         return prevState.map((square) => {
// //             return square.id == id ? {...square, on: !square.on} : square
// //         })
// //     })
// //      ``
// // }

// // const newSquare = square.map(box => {
// //     return(
// //         <Box key={box.id}
// //             on = {box.on}
// //             handleClick={() => toggleClick(box.id)}
// //         />
// //     )
// // })


// // const [state, setState] = useState(props.on)

// // styles = {
// //     background: state? "white" : "none",
// // }

// // function toggleClick () {
// //     setState(prevState => !prevState)
// // }


// // <div onClick={toggleClick}></div>


// // const [box, setBox] = useState(boxes)

// // const newBox = box.map(Nbox => <h1>{Nbox}</h1>)





// // {/* <Star isFilled={isFavorite} handleClick={toggle}>


// // function Start(props) {
// //     return{
// //         <div>
// //             <i>{props.isFilled}</i>
// //         </div>
// //     }
// // } */}










// // {/* <h1>{user.Name}</h1>
// // <h1>{user.age}</h1>
// // <img src={startIcon} /> */}



// // onClick={handleClick}
// // function toggleFavorite() {
// //     setUser( prevState => {
// //         return {
// //             ...prevState,
// //             isFavorite: !prevState.isFavorite,
// //         }
// //     })
// //     console.log(user.isFavorite)


// // const userdata = {
// //     Name: 'ashok',
// //     age: 29,
// //     isFavorite: false,
// // }


// // const [user, setUser] = useState(userdata)
// // let startIcon = user.isFavorite ? 'filled' : 'unfilled'


// {/* {newThing} */}
// // const [thingsArray, setThingArray] = useState(['Thing 1' , 'Thing 2'])

// // function handleClick() {
// //     setThingArray (prevThings => {
// //         return [...prevThings, `Thing ${prevThings.length + 1}`]
// //     })
// // }

// // const newThing = thingsArray.map(item => {
// //    return  <ul><li key={item}>{item}</li><hr></hr></ul> 
// // })




// // {/* <h1>{isgoingOut ? 'Yes' : 'No'}</h1> */}

// // const[isgoingOut, setIsGoingOut] = useState(true)

// // function handleClick() {
// //     setIsGoingOut (prevState => !prevState)
// //     console.log(isgoingOut ? 'Yes' : 'No')
// // }




// // {/* <div>
// //     <img src={memeImage} />
// // </div> */}


// // const [memeImage, setMemeImage] = useState('')

// // function getMemeImage() {
// //     const memesarray = memesdtat.data.mems;
// //     const randomImage = Math.floor(Math.random() * memesarray.length);
// //     setMemeImage (memesarray[randomImage].url)
// // {/* <p  style={styles.p}>{count}</p>
// // <button className='btn btn-primary' onClick={Increment }>+</button> */}

// // const [count, setCount] = useState(0)

// // function Increment() {
// //     setCount(prevCount => prevCount + 1)
// // }
// // function decrement() {
// //     setCount(prevCount=> prevCount && prevCount-1)
// //     console.log(count)
// // }

// // const [isImportant, setIsImportant] = useState('Yes')
// // // setIsImportant(prevState => {
// // //     prevState ? 'Yes' : 'No'
// // // })

// // function handleClick () {
// //     setIsImportant ('No')
// // {/* <p>{result[0]}</p> */}





// //         {/* <button onClick={handleClick} style={styles.button}>click</button> */}
// //         {/* <button onclick={memeImage} >click</button> */}
// //         {/* <img src={memImage} alt=''/> */}
// //         {/* {things} */}
// // // {/* 
// //         <button onClick={count && decrement}>-</button>
// //         <p>{count}</p>
// //         <button onClick={Increment}>+</button> */}
// // function Greeting(name) {
//         //     const date = new Date();
//         //     const hours = date.getHours() % 12;
//         //     let timeOfDay 
//         //     if (hours>=4 && hours<12){
//         //         timeOfDay = 'morning'
//         //     }
//         //     else if (hours>=12 && hours<5){
//         //         timeOfDay = 'afternoon'
//         //     }
//         //     else if (hours>=5 && hours<8){
//         //         timeOfDay = 'evening'
//         //     }
//         //     else if (hours>=8 && hours<4){
//         //         timeOfDay = 'night'
//         //     }else {
//         //         timeOfDay = 'invalid'
//         //     }
//         //     console.log(hours)
//         //     return (`"Good ${timeOfDay}, ${name}!"`)
//         // }
    
//         // console.log(Greeting('Jane'))
        
//         // let url **to update images changes on every click **    
//         // function memeImage() {
//             //     const memesarray = memesData.data.memes
//             //     const randomMeme = Math.floor(Math.random()* memesarray.legnth)
//             //     memeImgUrl = memesarray[randomMeme].url  
//             // }
            
//             // const [thingsArray, setThingArray] = useState( [] )
            
            
//             // function handleClick() {
//             //     const newThing = `Things${thingsArray.length+1}`
//             //     setThingArray(prevState => [...prevState, newThing])
//             //     console.log(thingsArray)
//             // }
             
//             // const things  = thingsArray.map(thing => {
//             //     return <p key={thing}>{thing}</p>
//             // })
    
//             // const [count, setCount] = useState(0)
            
//             // // let Count = count
//             // function Increment() {
//             //     setCount (prevCount => prevCount+1)
//             //     console.log(count)
//             // }
//             // function decrement() {
//             //     setCount (prevCount => prevCount-1)
//             //     console.log(count)
//             // }
//             // const Add = add