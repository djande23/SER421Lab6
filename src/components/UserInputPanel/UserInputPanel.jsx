import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Button} from "..";
import {Checkbox} from "..";
import {SelectField} from "..";


export const UserInputPanel = (props)=>{
return <NavigationWrapper
role={'navi-wrapper'}
>
    <BreedSelectionWrapper
    role={'breed-wrapper'}>
        {<Checkbox
        label={'Get by breed'}
        onChange={props.onBreedCheckboxChange}
        checked={props.useBreedSelection}
        disabled={props.animated}
        />}
        {<SelectField
        options={props.breeds}
        onChange={props.onBreedChange}
        selectedOption={props.selectedBreed}
        disabled={!props.useBreedSelection}
        />}
    </BreedSelectionWrapper>
    {<Checkbox
    label={'Get animated .gif'}
    onChange={props.onGifChange}
    checked={props.animated}
    disabled={props.useBreedSelection}
    />}
    <ButtonWrapper
    role={'button-wrapper'}>
        {<Button
        onClick={props.onFetchClick}
        value={'Get Image'}
        />}
    </ButtonWrapper>
</NavigationWrapper>


}
UserInputPanel.defaultProps ={
animated: false,
    useBreedSelection: false,
    breeds:[],
    selectedBreed: undefined,
    onBreedCheckboxChange: ()=>{},
    onBreedChange: ()=>{},
    onGifChange: ()=>{},
    onFetchClick: ()=>{}
}

const ButtonWrapper = styled.div`
padding: 40px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const BreedSelectionWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 40px 0 20px 0;
width: 100%;
`
const NavigationWrapper = styled.div`
height: 50%;
display: flex;
flex-wrap: wrap;
align-content: flex-start;
padding-left: 40px;
`