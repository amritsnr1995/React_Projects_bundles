import logo from "./logo.svg";
import "./App.css";
import Signature from "./components/Signature";
import RandomColor from "./components/RandomColor";
import LikePhotoApp from "./components/LikePhotoApp/LikePhotoApp";
import TestimonialsApp from "./testimonials_app/TestimonialsApp";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [twice, setTwice] = useState(0);

  const resetClick = () => {
    setCount(0);
    setTwice(0);
  };

  const handleCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setTwice(count * 2);
  }, [count]);
  return (
    <div className="App">
      <section>
        <h2>Use of UseEffectHook</h2>
        <p>Count: {count}</p>
        <p>Twice_Count:{twice}</p>
        <button onClick={handleCount}>Count</button>
        <button onClick={resetClick}>Reset</button>
      </section>
      <header>
        <h1>SignatureApp</h1>
        <Signature />
      </header>
      <section>
        <RandomColor />
      </section>
      {/* LikePhotoApp */}
      <section>
        <h1>
          <LikePhotoApp />
        </h1>
      </section>
      <section>
        <TestimonialsApp />
      </section>
    </div>
  );
}

export default App;
