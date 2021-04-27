import React, {useMemo} from 'react';
import styled from 'styled-components';

export const SelectField = (props) => {

    const options = useMemo(()=>{
        return props.options.map((option,index)=>{
            return<Option key={`${props.label}select-field-${index}`}{...option}/>
        });
    },[props.options, props.selectedOption])


    const handleOnChange = e => {
        const breed = Object.values(props.options).find(animalBreed=> animalBreed.value === e.target.value)
        const breedId= breed && breed.id;
        const value = {
            value: e.target.value,
            label: e.target.value,
            id:breedId
        }
        props.onChange(value)
    }
    return <Label>
        {props.label}
    <Select
        role = {'pet-select'}
        label = {props.label}
        selectedOption = {props.selectedOption}
        placeholder = {props.placeholder}
        onChange = {handleOnChange}
        disabled = {props.disabled}
        value={props.selectedOption.value}
    >
        {options}
    </Select>
    </Label>


}

SelectField.defaultProps = {
    label:'',
    options:[],
    selectedOption:{},
    disabled: false,
    placeholder:"Select an option",
    children:[],
    onChange: ()=>{},
    onFocus: ()=>{},
    onBlur: ()=>{}
}




const Label = styled.label`
font-family: Open-Sans,sans-serif;
font-size: 16px;
text-indent: 5px;
font-weight: 700;
color: #555;
display: block;
`
const Select = styled.select`
border-radius: 5px;
height: 50px;
font-size: 16px;
min-width: 218px;
outline: 0;
border: none;
box-shadow: inset 0 0 0 1px #CCC;
font-family: Open Sans,sans-serif;
font-size: 16px;
font-weight: 700;
color: #555;
display: block;
margin-top: 3px;
&:focus {
outline: 0;
box-shadow: 0 0 5px 3px #cce0ff;
background-color: #e8f1ff;
}
padding: 0 5px;
`

const Option = styled.option`
font-family: Open Sans,sans-serif;
font-size: 16px;
font-weight: 700;
color: #555;
`