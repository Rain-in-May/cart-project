import React, { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie'
import axios from 'axios'
import { Wrapper } from 'container/analysis/Analysis.style';
import { MyUserPie, MyExhbnPie } from 'container/index'
import { Divider } from 'antd';

const Analysis = () => {
    return(
    <Wrapper>
        <h3>사용자별 분포</h3>
        <Divider />
          <MyUserPie/>
        <h3>전시별 분포</h3>
        <Divider />
          <MyExhbnPie/>
        <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </Wrapper>
)
}

export default Analysis;
