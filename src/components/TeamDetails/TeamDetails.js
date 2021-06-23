import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LowerPart from '../LowerPart/LowerPart';
import MainDetails from '../MainDetails/MainDetails';
import './TeamDetails.css';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState({});

    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [idTeam]);
    return (
        <div className="detailStyle">
            <MainDetails team={team}/>
            <LowerPart team={team}/>
        </div>
    );
};

export default TeamDetails;