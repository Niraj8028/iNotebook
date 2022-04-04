import Notecontext from "./NoteContext";
import { useState } from "react";



const Notestate = (props) => {
  const host="http://localhost:5000"
  
  const [notes, setNotes] = useState([])

  const getNotes=async()=>{
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: 'GET', 
     
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzOGI3OGRhYzI0M2I1N2ZmYmFhYWIwIn0sImlhdCI6MTY0ODEzMTIzM30.hxBJdk_z8n3H1PatfDNWAMNXzA2Clx2bBmjgAQrC23o'
      },
    });
    const json=await response.json();
    setNotes(json);
  }

  const addNote =async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
        method: 'POST', 
       
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzOGI3OGRhYzI0M2I1N2ZmYmFhYWIwIn0sImlhdCI6MTY0ODEzMzE3MX0.IPyE8TnRy1v-nDfiIS1sSLcHAn1Q2iVg2Pc1Iu35AVY'
        },
        
        body: JSON.stringify({title,description,tag})
      });
     
    console.log("Adding a new note")
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', 
     
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzOGI3OGRhYzI0M2I1N2ZmYmFhYWIwIn0sImlhdCI6MTY0ODEzMzE3MX0.IPyE8TnRy1v-nDfiIS1sSLcHAn1Q2iVg2Pc1Iu35AVY'
        
      },
    });
    const resp = response.json();   
    console.log(resp);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }


  const editNote = async(id, title, description, tag) => {
    
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', 
       
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzOGI3OGRhYzI0M2I1N2ZmYmFhYWIwIn0sImlhdCI6MTY0ODEzMzE3MX0.IPyE8TnRy1v-nDfiIS1sSLcHAn1Q2iVg2Pc1Iu35AVY'
        },
        
        body: JSON.stringify({title,description,tag})
      });
      const json= response.json();

  
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  
}

  return (
    <Notecontext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </Notecontext.Provider>
  )
}
export default Notestate;