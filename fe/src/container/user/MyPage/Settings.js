import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ResponsivePie } from '@nivo/pie'
import axios from 'axios'
import { SettingWrapper } from 'container/analysis/Analysis.style';
import { ADD_EXHBN_PAGE, ADD_HALL_PAGE} from 'settings/constant'
import { Divider } from 'antd';

const Settings = () => {
    return(
    <SettingWrapper>
        <Divider/>
        <Link to={ADD_EXHBN_PAGE}><h3>전시관 등록</h3></Link>
        <Link to={ADD_HALL_PAGE}><h3>전시 등록</h3></Link>
        <br/><br/><br/>
        <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </SettingWrapper>
)
}

export default Settings;
