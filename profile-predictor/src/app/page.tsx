"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  // push  function allowsus to redirect use to another route
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`);
  };

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
