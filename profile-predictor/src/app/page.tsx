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
    <div
      className="
    min-h-screen
    flex items-center
    justify-center
    
    "
    >
      <div className="p-10
              border-8
              border-blue-200
              rounded-2xl">
        <h1
          className="
        text-3xl
        font-semibold
        mb-4

        "
        >
          Enter Your Name
        </h1>
      
      <form className="space-y-10" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          type="text"
          placeholder="Type your name.."
          className="
          w-full  p-2
          border border-gray-300 rounded"
        />
        <button
          className="
        w-full
        py-4
        px-4
         bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none
        "
          type="submit"
        >
          Enter
        </button>
      </form>
      </div>
    </div>
  );
}
