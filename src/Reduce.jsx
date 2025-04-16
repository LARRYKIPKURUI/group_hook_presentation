import React, { useReducer } from "react";

// Initial state for the reducer
const initialState = { count: 0 };

// Reducer function to handle different actions
function reducer(state, action) {
    
  switch (action.type) {
    case "increment":
      // Increments the count
      return { count: state.count + 1 };
    case "decrement":
      // Decrements the count
      return { count: state.count - 1 };
    case "reset":
      // Resets the count to the initial state (0)
      return initialState;
    default:
      // Throws an error for any unknown action type
      throw new Error();
  }
}

// Counter component using useReducer hook
export default function Counter() {
  // useReducer returns the current state and a dispatch function to trigger actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center mt-10">
      {/* Display the current count */}
      <p className="text-2xl">Count: {state.count}</p>

      {/* Buttons to dispatch actions to the reducer */}
      <div className="space-x-4 mt-4">
        {/* Increment button */}
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +
        </button>

        {/* Decrement button */}
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>

        {/* Reset button */}
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
