import React from 'react';

const Repo = ({repos}) => {
    return (
        <div className="repos">
            <ul>
                {repos.map(repo => (
                    <li>{repo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Repo;