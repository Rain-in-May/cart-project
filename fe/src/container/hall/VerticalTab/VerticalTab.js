import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VerticalWrapper from 'container/hall/VerticalTab/VerticalTab.style';
import { HALL_DETAIL_PAGE } from 'settings/constant';
import axios from 'axios';

const VerticalTab = (props) => {
    const [ hall, setHall ] = useState([])
    useEffect(()=> {
        const URL = 'http://localhost:8080/halls'
        axios.get(URL,)
        .then(resp => {
            setHall(resp.data)
        })
        .catch(err => {
            alert(err)
        })
    }, [])
    const hallList = hall.map((data) => (                   
        <li><a href={`${HALL_DETAIL_PAGE}/${data.hallNum}`}>{data.hallName}</a></li>
    ))
    return (
        <VerticalWrapper>
            <nav className="vertab">
                <ul>
                    { hallList }
                </ul>
            </nav>
        </VerticalWrapper>
    );
};

export default VerticalTab;