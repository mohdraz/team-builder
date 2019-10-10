import React, {useState} from 'react';

import Dashboard from "./components/dashboard";
import TeamForm from "./components/TeamForm";

import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      name: 'Mohd Raza',
      email: 'msraza1@gmail.com',
      role: 'Web Developer'
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);

  }

  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addNewTeam={addMember} />
    <Dashboard memberDash={members}  />
    </div>
  );
}

export default App;
