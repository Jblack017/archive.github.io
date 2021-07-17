import { useEffect, useState } from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <Landing seconds={seconds} />
    </div>
  );
}

export default App;
