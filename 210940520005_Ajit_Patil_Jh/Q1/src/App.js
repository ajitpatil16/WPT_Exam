import axios from "axios";
import React, { useState, setState, useEffect } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <MyChatApp />
    </>
  );
}

function MyChatApp() {
  const [newmessage, setmessage] = useState("");
  const [list, setList] = useState([]);
  const setNewMessage = (e) => {
    setmessage(e.target.value);
  };

  const addmessage = async () => {
    const url = "http://localhost:4000/add-user";
    const data = {
      message: newmessage,
    };
    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);
  };
  const getmessage = async () => {
    const url = "http://localhost:/users";
    const result = await fetch(url);
    const newList = await result.json();
    setList(newList);
  };
  useEffect(() => getmessage(), []);
  return (
    <div>
      <div className="header">
        {/* <header>MyChatApp by(Ajit_Patil/{210940520005}) </header> */}
        <h4>MyChatApp by(Ajit_Patil/210940520005)</h4>
      </div>
      <div>
        <input className="inbox" type="text" placeholder="Let's chat here..." />
        <input
          className="btn"
          type="button"
          value="send"
          onClick={addmessage}
        />
      </div>
      {list.map((item, index) => {
        <div key={index}></div>;
      })}
    </div>
  );
}
