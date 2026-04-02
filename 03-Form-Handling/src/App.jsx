import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const formHandler = (e)=>{
    e.preventDefault()
    //console.log('Form submited by', title);
    if(title.length>0){
      console.log('Form submited by', title);
    }else{
      alert('Please enter a name');
    }
    
    setTitle('')
  }

  return (
    <div className='form'>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
        <input 
        type="text" 
        placeholder="Enter Name" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App