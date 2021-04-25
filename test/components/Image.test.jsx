import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Image } from "../../src/components";
import userEvent from "@testing-library/user-event";

describe('<Image />',function (){
it('wrapper should render',()=>{
    render(<Image />)
    expect(screen.getByRole('image-wrap')).toBeInTheDocument()
})
    it('should display an image if there is one',()=>{
        render(<Image />)
        expect(screen.getByRole('image-disp')).toBeInTheDocument()
    })
    it('should fetch a new image if none to display',()=>{
        render(<Image imageUrl={''}/>)
        expect(screen.getByRole('image-none')).toBeInTheDocument()
    })
    it('should have style in the wrapper',()=>{
        render(<Image />)
        expect(screen.getByRole('image-wrap')).toHaveStyle(`
        width: 680px;
        height: 680px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        box-shadow: 0 0 0 1px #777;
        border-radius: 6px;
        `)
    })
    it('should have style if an image is there',()=>{
        render(<Image />)
        expect(screen.getByRole('image-disp')).toHaveStyle(`
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        width: 640px;
        height: 640px;
        `)
    })
    it('should ahve style if there is no new image if none to display',()=>{
        render(<Image imageUrl={''}/>)
        expect(screen.getByRole('image-none')).toHaveStyle(`
        color: #555;
        font-weight: 700;
        font-size: 28px;
        font-family: Open Sans,sans-serif;
        `)
    })

})