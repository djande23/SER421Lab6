import React, {useMemo} from 'react';
import styled from 'styled-components';
import {KeyValueList} from '../KeyValueList/KeyValueList'

export const InfoPanel=(props)=>{
    if(props.stats){
        return <StatsWrapper
            role={'stats-wrapper'}
        >

            {<KeyValueList items={props.stats}/>}
        </StatsWrapper>


    }
    else{
        return <StatsWrapper
            role={'stats-wrapper'}
        >
        <NoInfoWrapper
        role={'noinfo-wrapper'}
        >
         <NoInfo>No Info</NoInfo>
        </NoInfoWrapper>
        </StatsWrapper>
    }


}

InfoPanel.defaultProps = {
    stats: ''
}

const StatsWrapper = styled.div`
padding-left: 40px;
height: 50%;
justify-content: flex-end;
display: flex;
flex-direction: column;
`
const NoInfo = styled.div`
color: #555;
font-weight 700;
font-family: Open Sans,sans-serif;
`

const NoInfoWrapper = styled.div`
height: 25%;
width: 98%;
display: flex;
align-items: center;
justify-content: center;
`