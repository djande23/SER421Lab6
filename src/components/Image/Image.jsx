import React from 'react';
import styled from 'styled-components';

export const Image = (props) => {

    if(props.imageUrl && props.imageUrl.length >0){
        return <Wrapper
        role = 'image-wrap'>
        <Images
            role='image-disp'
            imageUrl={props.imageUrl}
        />
        </Wrapper>
    }
    else{
        return <Wrapper>
        <NoImage
            role='image-none'>
        Fetch a new image→
        </NoImage>
    </Wrapper>
    }


}

Image.defaultProps = {

}

const Wrapper = styled.div`
width: 680px;
height: 680px;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
border: none;
box-shadow: 0 0 0 1px #777;
border-radius: 6px;
`
const Images = styled.div`
background-image: url("${props => props.imageUrl}");
background-repeat: no-repeat;
background-size: contain;
background-position: center center;
width: 640px;
height: 640px;
`

const NoImage = styled.div`
color: #555;
font-weight: 700;
font-size: 28px;
font-family: Open Sans,sans-serif;
`