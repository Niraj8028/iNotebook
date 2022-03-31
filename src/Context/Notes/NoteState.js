import Notecontext from "./NoteContext";
import { useState } from "react";

const Notestate=(props)=>{
    const initialNotes=[
        {
          "_id": "623c892200d0ac72c6e10933z",
          "user": "6238b78dac243b57ffbaaab0",
          "title": "sahil dada more",
          "description": "wake up early",
          "tag": "personal",
          "date": "2022-03-24T15:07:14.789Z",
          "__v": 0
        },
        {
          "_id": "623f3264dd11bfa820eb1857d",
          "user": "6238b78dac243b57ffbaaab0",
          "title": "sahil dada more",
          "description": "wake up early",
          "tag": "personal",
          "date": "2022-03-26T15:33:56.776Z",
          "__v": 0
        },
        {
          "_id": "624031d5560f0b901bb5262ab",
          "user": "6238b78dac243b57ffbaaab0",
          "title": "sahil dada more",
          "description": "wake up early",
          "tag": "personal",
          "date": "2022-03-27T09:43:49.720Z",
          "__v": 0
        },
        {
          "_id": "623f3264dd11bfa820eb1857c",
          "user": "6238b78dac243b57ffbaaab0",
          "title": "sahil dada more",
          "description": "wake up early",
          "tag": "personal",
          "date": "2022-03-26T15:33:56.776Z",
          "__v": 0
        },
        {
          "_id": "624031d5560f0b901bb5262a",
          "user": "6238b78dac243b57ffbaaab0",
          "title": "sahil dada more",
          "description": "wake up early",
          "tag": "personal",
          "date": "2022-03-27T09:43:49.720Z",
          "__v": 0
        },
        {
          "_id": "623f3264dd11bfa820eb1857b",
          "user": "6238b78dac243b57ffbaaab0",
          "title": "sahil dada more",
          "description": "wake up early",
          "tag": "personal",
          "date": "2022-03-26T15:33:56.776Z",
          "__v": 0
        }
        
      ]
      const [notes, setNotes] = useState(initialNotes)
      const addNotes=(title,description,tag)=>{

        const note={
          "_id": "624031d51560f0b901bb5262a",
          "user": "6238b78dac243b57ffbaaab0",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-03-27T09:43:49.720Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
      }
    return(
    <Notecontext.Provider value={{notes,addNotes}}>
        {props.children}
    </Notecontext.Provider>
    )
}
export default Notestate;