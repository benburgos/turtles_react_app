import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [turtle, setTurtle] = useState([]);

  useEffect(() => {
    async function getTurtles() {
      const response = await fetch(
        'https://bb-sei-turtle-api.herokuapp.com/turtles'
      );
      const data = await response.json();
      setTurtle(data);
    }
    getTurtles();
  }, []);

  return (
    <div className="App">
      <h1>It me!</h1>
      {turtle.map((turtle, index) => {
        return (
          <div>
            {turtle.name}, {turtle.role}
          </div>
        );
      })}
    </div>
  );
}

export default App;
