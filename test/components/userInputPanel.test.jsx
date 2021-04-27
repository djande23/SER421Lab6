import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {SelectField, UserInputPanel} from "../../src/components";
import userEvent from "@testing-library/user-event";

describe('<UserInputPanel />',()=>{
    it('should render',()=>{
        render(<UserInputPanel/>)
        expect(screen.getByRole('navi-wrapper')).toBeInTheDocument()
    })
    it('should render a breed wrapper',()=>{
        render(<UserInputPanel/>)
        expect(screen.getByRole('breed-wrapper')).toBeInTheDocument()
    })
    it('should render a button wrapper',()=>{
        render(<UserInputPanel/>)
        expect(screen.getByRole('button-wrapper')).toBeInTheDocument()
    })
    it('should render with style',()=>{
        render(<UserInputPanel/>)
        expect(screen.getByRole('navi-wrapper')).toHaveStyle(`
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-left: 40px;
        `)
    })
    it('should render a breed wrapper with style',()=>{
        render(<UserInputPanel/>)
        expect(screen.getByRole('breed-wrapper')).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px 0 20px 0;
        width: 100%;
        `)
    })
    it('should render a button wrapper with style',()=>{
        render(<UserInputPanel/>)
        expect(screen.getByRole('button-wrapper')).toHaveStyle(`
        padding: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        `)
    })
    it('should render a button labeled "Get Image"',()=>{
        render(<UserInputPanel/>)
        expect(screen.getByRole('button')).toHaveProperty('value','Get Image')
    })
    it('should render a checkbox for animated gifs',()=>{
        render(<UserInputPanel />)
        expect(screen.getByLabelText('Get animated .gif')).toBeInTheDocument()
    })
    it('should render a checkbox for get by breed',()=>{
        render(<UserInputPanel />)
        expect(screen.getByLabelText('Get by breed')).toBeInTheDocument()
    })
    it('should render a selectField',()=>{
        render(<UserInputPanel />)
        expect(screen.getByRole('pet-select')).toBeInTheDocument()
    })
    it('should have options in the select',()=>{
        let selectOptions = [<option value={'foo'} key={'foo'}/>,<option value={'bar'} key={'bar'}/>]
        render(<UserInputPanel breeds = {selectOptions}/>)
        expect(screen.getByRole('pet-select')).toHaveProperty('options')
    })

})