import React, { useState } from 'react';

const Navbar = ({ geceModu, setGeceModu, userName, setUserName}) => {
  const [userInput, setUserInput] = useState("");
  const toggleMode = e => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <label>
        <input onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
        <button onClick={() => setUserName(userInput)}>Kaydet</button>
      </label>
      <div>Hoş Geldin {userName}</div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={geceModu ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
