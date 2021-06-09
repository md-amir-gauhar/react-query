import './App.css';
import { useQuery } from 'react-query';
import { useState } from 'react';

const fetcher = (user) => {
  return fetch(`https://api.github.com/users/${user}`).then(res => res.json())
}

function App() {
  const [user, setUser] = useState("");

  const { data, isLoading } = useQuery(["github-data", user], () => fetcher(user))

  console.log(data);

  if (isLoading) {
    return (
      <div className="App">
        <label>Enter user:</label>
        <input type="text" value={user} onChange={e => setUser(e.target.value)} />
        <h2>loading...</h2>
      </div>
    )
  }

  return (
    <div className="App">
      <label>Enter User name:</label>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />
      <h2>Name: {data.name}</h2>
      <img src={data.avatar_url} alt=""/>
    </div>
  );
}

export default App;
