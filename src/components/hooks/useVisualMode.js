import { useState } from "react";
// THE HOOK IS useVisualMode
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      history[history.length - 1] = newMode;
    } else {
      history.push(newMode);
    }
    setHistory([...history]);
  }
  //
  function back() {
    if (history.length > 1) {
      history.pop();
      setHistory([...history]);
      setMode(history[history.length - 1]);
    }
  }

  return { mode, back, transition };
}

// function useControlledInput(initial) {
//   const [value, setValue] = useState(initial);

//   return {
//     value,
//     onChange: (event) => setValue(event.target.value)
//   };
// }
