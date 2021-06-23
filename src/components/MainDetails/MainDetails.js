import { faFlag, faFutbol } from '@fortawesome/free-regular-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ImgFemale from '../../img/female.png';
import ImgMale from '../../img/male.png';
import './MainDetails.css';

const MainDetails = (props) => {
    const {strTeam, strCountry, intFormedYear, strSport, strGender} = props.team;
    return (
        <div className="main-details">
            <div className="main-details__info">
                <h2>{strTeam}</h2>
                <h5> <FontAwesomeIcon icon={faSearchLocation}/> Founded : {intFormedYear}</h5>
                <h5> <FontAwesomeIcon icon={faFlag}/> Country : {strCountry}</h5>
                <h5> <FontAwesomeIcon icon={faFutbol}/> Sports Type : {strSport}</h5>
            </div>
            <div className="main-details__img">
                {
                    strGender === "Male" ? <img src={ImgMale} alt="male-team" /> : <img src={ImgFemale} alt="female-team" />
                }
            </div>
        </div>
    );
};

export default MainDetails;