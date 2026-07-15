// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { useState } from "react";

function App() {
  const [user, setUser] = useState({name: "Aayush",age: 20,
  });
  const updateAge=()=>{
    setUser({...user,age: 21
    });
  };
  return (
    <>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={updateAge}>
        Update Age
      </button>
    </>
  );
}
export default App;