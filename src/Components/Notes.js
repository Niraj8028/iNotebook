import React, {useContext} from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import Notesitem from './Notesitem';



const Notes = () => {
    const context = useContext(NoteContext);
    const {notes} = context;
    return (
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Notesitem note={note}/>  
            })}
            </div>
    )
}

export default Notes