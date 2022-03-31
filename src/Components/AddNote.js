import React, { useContext, useState} from 'react'
import Notecontext from '../Context/Notes/NoteContext';

function AddNote() {

  const handleClick=()=>{
    const context=useContext(Notecontext);
    const {addNotes}=context;

    const [addNote, setaddNote] = useState({})
  }
  return (
    <div><form>
    <div className="mb-3">
      <label for="title" className="form-label">Tiitle</label>
      <input type="text" className="form-control" id="tittle" name='title' aria-describedby="emailHelp" onChange={onchange} />
      
    </div>
    <div className="mb-3">
      <label for="description" className="form-label">Description</label>
      <input type="text" className="form-control" id="description" name='description' onChange={onchange}/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
  </form></div>
  )
}

export default AddNote