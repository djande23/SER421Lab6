import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Checkbox }  from "../../src/components";
import userEvent from "@testing-library/user-event";

describe('<Checkbox />',function(){
    it('should render',()=>{
        render(<Checkbox />)
        expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })
    it('label should render',()=>{
        render(<Checkbox  label="This is a label"/>)
        expect(screen.getByText('This is a label')).toBeInTheDocument()
    })
    it('label should not be checked',()=>{
        render(<Checkbox />)
        expect(screen.getByText('This is a label')).toHaveProperty('checked',false)
    })
    it('should not be checked',()=>{
        render(<Checkbox />)
        expect(screen.getByRole('checkbox')).toHaveProperty('checked',false)
    })
    it('should not be disabled',()=>{
        render(<Checkbox />)
        expect(screen.getByRole('checkbox')).toHaveProperty('disabled',false)
    })
    it('should have set scale',()=>{
        render(<Checkbox />)
        expect(screen.getByRole('checkbox')).toHaveAttribute('scale','medium')
    })
    it('should have the correct value',()=>{
        render(<Checkbox value="hello"/>)
        expect(screen.getByRole('checkbox')).toHaveAttribute('value','hello')
    })
    it('should have a style',()=>{
        render(<Checkbox />)
        expect(screen.getByRole('checkbox')).toHaveStyle(`opacity: 0`)
    })
    it('label should have a style',()=>{
        render(<Checkbox disabled={false}/>)
        expect(screen.getByText('This is a label')).toHaveStyle(`
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
    color: #555
        `)
    })
})