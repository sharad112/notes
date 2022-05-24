import React, { useState } from "react";
import ActualNotes from "./ActualNotes";
import Right from "../../Right/Right";
const Middle = () => {
  const [hide, show] = useState("none");
  // state for creating the notes card

  // this state is for creating object that gets the value from both the
  // heading and content input fields
  const [notesInitial, notesFinal] = useState({
    heading: "",
    content: "",
  });

  // creating an input field for creating an array so that we can map that into
  // the actual notes components
  const [arr, setarr] = useState([]);
  const time = new Date().getHours();
  let greet = "";
  if (time >= 24 || time < 12) {
    greet = "morning";
  } else if (time >= 12 && time < 18) {
    greet = "Afternoon";
  } else if (time >= 18 && time < 21) {
    greet = "Evening";
  } else {
    greet = "night";
  }

  const displayStat = () => {
    show("block");
  };
  const close = () => {
    show("none");
  };

  // function for getting the data from the input fields
  const fun1 = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    notesFinal((prev1) => {
      return {
        ...prev1,
        [name]: value,
      };

     
    });
    createArr("");
  };

  const createArr = () => {
    setarr((prev2) => {
      return [...prev2, notesInitial];
    });
  };

  const deleteNote = (ind) => {
    setarr((prev) => {
      return prev.filter((elem, index) => {
        return ind !== index;
      });
    });
  };
  //creating state for the search bar

  const [search, setsearch] = useState("");
  const searchbar = (event) => {
    let value = event.target.value;
    setsearch(value);
  };
  return (
    <div className="middle-inside">
      <div className="middle-content">
      <div className="middle-top">
        <p>hello sharad good {greet} !</p>
        <h1>you have 8 tasks today</h1>

        <input
          type="text"
          placeholder="search something"
          onChange={searchbar}
          value={search}
        />
      </div>

      <div className="actual-notes">
        <div className="head">
          <h1>your notes</h1>
          <button className="addnote" onClick={displayStat}>
            add note
          </button>
        </div>

        <div className="add-note" style={{ display: hide }}>
          <div className="inputs">
            <input
              type="text"
              name="heading"
              placeholder="enter the heading"
              value={notesInitial.heading}
              onChange={fun1}
            />
            <input
              type="text"
              name="content"
              placeholder="enter the notes"
              value={notesInitial.content}
              onChange={fun1}
            />
          </div>

          <div className="buttons">
            <button className="add" onClick={createArr}>
              add
            </button>
            <button className="close" onClick={close}>
              close
            </button>
          </div>
        </div>

        <div className="actualnoteswrapper">
          <div className="filters">
            <p>recent</p>
            <p>today</p>
            <p>upcoming</p>
            <p>later</p>
          </div>
          {arr
            .filter((val, ind) => {
              if (search.length === 0) {
                return val;
              } else if (
                val.heading.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((value, index) => {
              return (
                <ActualNotes
                  heading={value.heading}
                  content={value.content}
                  key={index}
                  onSelect={deleteNote}
                  id={index}
                />
              );
            })}
        </div>
      </div>
      </div>

      <div className="right">
      <Right/>
      </div>
    </div>
  );
};

export default Middle;
