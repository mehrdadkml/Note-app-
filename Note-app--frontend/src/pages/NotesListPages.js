import React ,{useState,useEffect}from 'react'
import Listitem from '../components/Listitem'
const NotesListPages = () => {

    let[notes,setNotes]=useState([])
    useEffect(() =>{
      getNotes()

    },[])


    let getNotes=async() =>{
        let response=await fetch('/api/notes/')
        let data=await response.json()
        
        setNotes(data)
    }
  return (
    <div>
      <div className='notes-list'>
        {notes.map((note,index)=>(
          <Listitem key={index} note={note}/>
        ))}
      </div>
    </div>
  )
}

export default NotesListPages




