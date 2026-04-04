import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [notes, setNotes] = useState([])

  const addNoteHandler = (e) => {
    e.preventDefault()

    const updateNotes = [...notes]

    updateNotes.push({ title, detail })

    setNotes(updateNotes)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const updateNotes = [...notes]
    updateNotes.splice(idx, 1)

    setNotes(updateNotes)
  }


  return (
    <div className='min-h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        addNoteHandler(e)
      }} className='flex flex-col items-start gap-4 lg:w-1/2 p-10'>

        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        <input
          className='w-full px-5 font-medium py-2 border-2 outline-none rounded'
          type="text"
          placeholder="What's on your mind?"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          className='w-full px-5 font-medium h-32 py-2 border-2 outline-none rounded flex items-start flex-row'
          required
          placeholder="Write your note in detail..."
          name=""
          id=""
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />

        <button className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'>
          Add Note
        </button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className="mt-6 h-[90%]  columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 ">
          {notes.map(function (elem, idx) {
            return <div key={idx} className="w-40 relative items-start min-h-52 justify-between flex flex-col rounded-xl p-4 px-4 bg-cover bg-white break-inside-avoid" >
              <div>
                <h3 className='leading-tight text-lg mb-2 font-semibold text-black'>{elem.title}</h3>
                <p className='leading-tight text-sm text-gray-500'>{elem.detail}</p>
              </div>
              <button
                className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-semibold text-white mt-6"
                onClick={() => {
                  deleteNote(idx)
                }}
              >
                Delete
              </button>
            </div>
          })}
        </div>
      </div>
    </div >
  )
}

export default App