import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 border bg-gray-500 border-blue-500 text-dark-500 rounded-lg hover:text-white hover:bg-dark-700 transition"
        onClick={increment}
      >
        Increment
      </button>

      <p data-testid="counter-value" className="px-4 py-4 font-bold">
        {count}
      </p>
    </div>
  );
};
