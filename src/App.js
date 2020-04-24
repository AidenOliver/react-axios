import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);

  

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async() => {
    const response = await fetch(`https://api.github.com/users/AidenOliver/repos`);
    const data = await response.json();
    setRepos(data);
    console.log(data);
  }


  
  return (
    <div className="App">
      {repos.map((repo) => (
        <div>
          <h4>{repo.name}</h4>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
