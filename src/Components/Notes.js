import React, { useContext, useEffect , useRef, useState  } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import AddNote from './AddNote';
import Notesitem from './Notesitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])
    const ref = useRef(null)
    const [note, setNote] = useState({etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    const handleClick = (e)=>{
        console.log("Updating the note...", note)
        e.preventDefault(); 
    }
    return (
        <>
            <AddNote />



            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="row my-3">
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form className="my-3 mx-4">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                                
                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={handleClick} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>You Notes</h2>
                {notes.map((note) => {
                    return <Notesitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes