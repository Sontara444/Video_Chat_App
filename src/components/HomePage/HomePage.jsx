import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const handleSubit= (e)=>{
    e.preventDefault()
    alert(input)
    navigate(`/room/${input}`)
    setInput("");
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit" onClick={handleSubit}>Join</button>
      </div>
    </div>
  );
};

export default HomePage;
