import React,{useContext} from 'react'
import notecontext from '../Context/Notes/NoteContext';

const Noteitem = (props) => {
    const context=useContext(notecontext);
    const { deleteNote }=context;
    const { note,updateNote } = props;

    
    return (
        <div className="col-md-3"> 
            <div className="card my-3"> 
                <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p> 
                <i className="far fa-trash-can mx-3" onClick={()=>{deleteNote(note._id)}}></i>
                <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
                </div>                
            </div>            
        </div>
    )
}

export default Noteitem