import React from 'react';
import styled from 'styled-components';

export const Checkbox = (props) =>{
    return <Label
        checked={props.checked}
        isDisabled={props.disabled}
        >
        {props.label}
        <Input
            type={'checkbox'}
            value={props.value}
            checked={props.checked}
            disabled={props.disabled}
            scale={'medium'}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    </Label>
}

Checkbox.defaultProps = {
    value: '',
    label: 'This is a label',
    disabled: false,
    checked: false,
    onChange: ()=>{},
    onFocus: ()=>{},
    onBlur: ()=>{}
}

const Input = styled.input`
opacity: 0
`
const Label = styled.label`
    position: relative;
    padding-left: 35px;
    height: 25px;
    font-size: 16px;
    line-height: 25px;
    font-family: Open Sans,sans-serif;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    color: ${props => props.isDisabled ? '#999' : '#555'};
    
    &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 23px;
        height: 23px;
        border:${props=> props.isDisabled ? '1px solid #EEE' : '1px solid #AAA'};
        background: #FFF;
        border-radius: .2em;
        box-shadow: inset 0 1px 3px rgba(0,0,0,.1), 0 0 0 rgba(203, 34,237,.2);
        transition: all .275s;
    }
    ${props => props.checked && `
    &:after{
    content: '✔'
    position: absolute;
    top: 1px;
    left: 3px;
    width: 25px;
    height: 25px;
    font-size: 25px;
    line-height: 25px;
    transition: all .2s;    
    }

`}   
`