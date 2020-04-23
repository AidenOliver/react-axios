import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([JSON.stringify()]);
  const [link, setLink] = useState([JSON.stringify()]);

  useEffect(() => {
    getRepos();
    getLink();
  }, []);

  const getRepos = async() => {
    const response = await fetch(`https://api.github.com/users/AidenOliver/repos`);
    const data = await response.json();
    const repo_name = data[0].name;
    
    setRepositories(repo_name);
    console.log(repo_name);
  }

  const getLink = async() => {
    const link_response = await fetch(`https://api.github.com/users/AidenOliver/repos`);
    const link_data = await link_response.json();
    const link_url = link_data[0].html_url;
    
    setLink(link_url);
    console.log(link_url);
  }

  return (
    <div className="App">
      {repositories}
      <hr />
      {link}
    </div>
  );
}

export default App;
