import React, { useState } from 'react'
import axios from 'axios';

//API Calls Code
const App = () => {

  const [data, setData] = useState([])

    const getData = async () => {
      const response = await axios.get('https://picsum.photos/v2/list')

      setData(response.data)
    }
  
  return(
    <div>
      <button onClick={getData}>Tap Here</button>
      <div>
        {data.map(function(elem, idx){
          
        return <h3>Number: {idx+1} Height: {elem.height}, Width: {elem.width} </h3>
        })}
      </div>
    </div>
  )
}


// Local Storage Code
// const App = () => {


//   const user ={
//     userName: 'Ehasanul',
//     age: 26,
//     city: 'Jashore'
//   }

//   // const a = localStorage.setItem('User', JSON.stringify(user.userName))
//   // const b = localStorage.setItem('Age', JSON.stringify(user.age))
//   // const c = localStorage.setItem('Location', JSON.stringify(user.city))


//   const d = localStorage.getItem('Age')

//   const e = localStorage.removeItem('Age')

//   const f = localStorage.setItem('Locaiton', 'Dhaka')

//   return (
//     <div>
//       <button onClick={function(){
//         console.log(d);
//       }}>Click Here</button>
//     </div>
//   )
// }

export default App