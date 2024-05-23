"use client";

import { useState } from "react";

export default function Home() {
  
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          type="text"
          placeholder="Type your name.."
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
