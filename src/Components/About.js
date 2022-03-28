import React from 'react'
import { useContext } from 'react'
import Notecontext from '../Context/Notes/NoteContext'
const About = () => {
  const a=useContext(Notecontext);
  return (
    <div>This is About {a.Name}</div>
  )
}

export default About