import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import "./Home.css";

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(()=> {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, []);

    const showTeams = teams.slice(0, 9);
    return (
        <div className="home-style">
            {
                showTeams.map(team => <Team team={team}></Team>)
            }
        </div>
    );
};

export default Home;