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
    const first_name = data[0].name;
    setRepositories(first_name);
    console.log(first_name);
  }

  return (
    <div className="App">
      {JSON.stringify(repositories)}
      
    </div>
  );
}

export default App;
