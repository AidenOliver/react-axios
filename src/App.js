import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async() => {
    const response = await fetch(`https://api.github.com/users/AidenOliver/repos`);
    const data = await response.json();
    setRepositories(data);
    console.log(data);
  }

  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
