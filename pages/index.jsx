import React, { useState } from 'react';
import styled from 'styled-components';
import {DOG_API_TYPE,DOG_API_URL, useApi} from '../api/useApi';
import {Image, InfoPanel, UserInputPanel} from "../src/components";

const Index=()=> {
    const [ selectedBreed, setSelectedBreed ] = useState();
    const [useBreedSelection, setUseBreedSelection] = useState(false)
    const [animated, setAnimated] = useState(false)
    const [image, setImage] = useState()
    const [stats, setStats] = useState()

    const {fetchImage, breeds} = useApi(DOG_API_TYPE,'cb0da749-1778-4f4a-a883-5a33229f7b28')

    const onFetchClick = async()=>{
        const breed = useBreedSelection && selectedBreed.id;
        const {imageUrl, breedStats} = await fetchImage(breed,animated,'cb0da749-1778-4f4a-a883-5a33229f7b28',DOG_API_URL)
        setImage(imageUrl);
        setStats(breedStats);
    }

    const onBreedCheckboxChange = () =>{
        if(!animated){
            setUseBreedSelection(!useBreedSelection)
            setSelectedBreed(breeds[0]);
        }

    }

    const onBreedChange = value => setSelectedBreed(value);
    const onGifChange = () => !useBreedSelection && setAnimated(!animated);

    return <Wrapper role={'nav-wrapper'}>
        {<Image
        imageUrl={image}
        />}
        <SideBarWrapper role={'sidebar-wrap'}>
            {<InfoPanel
            stats={stats}
            />}
            {<UserInputPanel
                animated={animated}
                useBreedSelection={useBreedSelection}
                breeds={breeds}
                selectedBreed={selectedBreed}
                onBreedCheckboxChange={onBreedCheckboxChange}
                onBreedChange={onBreedChange}
                onGifChange={onGifChange}
                onFetchClick={onFetchClick}
            />}
        </SideBarWrapper>
    </Wrapper>;
}


const Wrapper = styled.div`
margin: auto;
padding: 40px;
box-shadow: 0 0 0 1px #EEE;
width: 1280px;
display: flex;
align-items: center;
justify-content: center;
border: none;
`
const SideBarWrapper = styled.div`
max-width: 500px;
height: 720px;
`

export default Index;