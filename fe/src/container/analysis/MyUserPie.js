import React, { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie'
import axios from 'axios'

const MyUserPie = () => {
    const [ userData1, setUserData1 ] = useState([])
    const [ userData2, setUserData2 ] = useState([])
    const URL = 'http://localhost:8080/analyses/'
    useEffect(() =>{
        axios.get(URL+'gender', {headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem("token")}})
        .then(resp => {
            setUserData1(resp.data)
        })
        .catch(err => {
            alert(err)
        })
        axios.get(URL+'preferGenre', {headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem("token")}})
        .then(resp => {
            setUserData2(resp.data)
        })
        .catch(err => {
            alert(err)
        })
    }, [])
    const data1 = [
    {
        labels: '여성',
        id: '여성',
        value: userData1.female,
        color: 'hsl(27, 70%, 50%)'
    },
    {
        labels: '남성',
        id: '남성',
        value: userData1.male,
        color: 'hsl(143, 70%, 50%)'
    },
    ]
    const data2 = [
        {
            labels: '미디어',
            id: '미디어',
            value: userData2.media,
            color: 'hsl(27, 70%, 50%)'
        },
        {
            labels: '공예',
            id: '공예',
            value: userData2.craft,
            color: 'hsl(143, 70%, 50%)'
        },
        {
            labels: '회화',
            id: '회화',
            value: userData2.painting,
            color: 'hsl(143, 70%, 50%)'
        },
        {
            labels: '설치',
            id: '설치',
            value: userData2.installation,
            color: 'hsl(143, 70%, 50%)'
        },
        {
            labels: '조각',
            id: '조각',
            value: userData2.sculpture,
            color: 'hsl(143, 70%, 50%)'
        },
        ]
    return(<>
    <div className="left">
    <h4> 성별 </h4>
    <ResponsivePie
        data={data1}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-151}
        sortByValue={true}
        innerRadius={0.55}
        padAngle={2}
        cornerRadius={1}
        fit={false}
        colors={{ scheme: 'pastel1' }}
        borderColor={{ theme: 'background' }}
        radialLabelsTextColor="#524c4c"
        radialLabelsLinkOffset={1}
        radialLabelsLinkDiagonalLength={11}
        radialLabelsLinkHorizontalLength={18}
        radialLabelsLinkStrokeWidth={2}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        sliceLabelsSkipAngle={5}
        sliceLabelsTextColor="#524c4c"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: '여성'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '남성'
                },
                id: 'dots'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    /></div>
    <div className="right">
    <h4> 장르 </h4>
    <ResponsivePie
        data={data2}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-151}
        sortByValue={true}
        innerRadius={0.55}
        padAngle={2}
        cornerRadius={1}
        fit={false}
        colors={{ scheme: 'pastel1' }}
        borderColor={{ theme: 'background' }}
        radialLabelsTextColor="#524c4c"
        radialLabelsLinkOffset={1}
        radialLabelsLinkDiagonalLength={11}
        radialLabelsLinkHorizontalLength={18}
        radialLabelsLinkStrokeWidth={2}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        sliceLabelsSkipAngle={5}
        sliceLabelsTextColor="#524c4c"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: '미디어'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '설치'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '공예'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '조각'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '회화'
                },
                id: 'dots'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    /></div>
    </>
)
}

export default MyUserPie;

