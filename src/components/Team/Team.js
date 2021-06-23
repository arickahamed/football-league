import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import one from '../../img/1.png';
import two from '../../img/2.png';
import three from '../../img/3.png';
import four from '../../img/4.png';
import five from '../../img/5.png';
import six from '../../img/6.png';
import seven from '../../img/7.png';
import eight from '../../img/8.png';
import nine from '../../img/9.png';
import './Team.css';



const Team = (props) => {
    const history = useHistory();
    const btnClicked = (id) => {
        const url = `/Details/${id}`;
        history.push(url);
    }
    const images =[{
        one, two, three, four, five, six, seven, eight, nine
    }]
    const {strTeam, strSport, idTeam} = props.team;
    return (
        <div className="team-style">
            {
                images.map(image => <img src={image} alt="logo"></img>)
            }
            <h4>{strTeam}</h4>
            <p>{strSport}</p>
            <button onClick={() => btnClicked(idTeam)}>Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
        </div>
    );
};

export default Team;