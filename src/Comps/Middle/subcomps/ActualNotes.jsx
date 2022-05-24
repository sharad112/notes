import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { CgTrashEmpty } from "react-icons/cg";
const ActualNotes = (props) => {
 
  return (
    <div className="actual-notes1">
      <div className="notes-head">
        <h1>{props.heading}</h1>
        <div className="icons1">
          <MdOutlineEdit className="notesIcon"  />
          <CgTrashEmpty className="notesIcon" onClick={()=>
          {
            props.onSelect(props.id)
          }} />
        </div>
      </div>
      <p>
        {props.content}
      </p>
    </div>
  );
};

export default ActualNotes;
