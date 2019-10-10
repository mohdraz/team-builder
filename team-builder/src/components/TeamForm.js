import React, {useState} from "react";

const TeamForm = props => {
    const [team, setTeam] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChange = e => {
        setTeam({...team, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({
            name: "",
            email: "",
            role: ""
        });
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={team.name} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={team.email} onChange={handleChange} />

            <label htmlFor="role">Role</label>
            <input id="role" name="role" type="text" value={team.role} onChange={handleChange} />

            <button type="submit">Add Team</button>

        </form>


      </div>
    );
}

export default TeamForm;