import React, {useContext,useEffect} from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import AddNote from './AddNote';
import Notesitem from './Notesitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes,getNotes} = context;
    useEffect(() => {      
        getNotes();     
    }, [])
    return (
        <div className="row my-3">
            <AddNote/>
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Notesitem key={note._id} note={note}/>  
            })}
            </div>
    )
}

export default Notes