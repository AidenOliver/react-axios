import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([JSON.stringify()]);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async() => {
    const response = await fetch(`https://api.github.com/users/AidenOliver/repos`);
    const data = await response.json();
    const repo_name = data[0].name;
    
    setRepositories(repo_name);
    console.log(repo_name);
  }

  
  return (
    <div className="App">
      {repositories}
    </div>
  );
}

export default App;
