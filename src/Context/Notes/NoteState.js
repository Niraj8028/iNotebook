import Notecontext from "./NoteContext";
import { useState } from "react";

const Notestate=(props)=>{
    const state={
        "Name":"Niraj",
        "Class":"10 B"
    }

    return(
    <Notecontext.Provider value={state}>
        {props.children}
    </Notecontext.Provider>
    )
}
export default Notestate;