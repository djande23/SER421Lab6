import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Button }  from "../../src/components";
import userEvent from "@testing-library/user-event";

describe('<Button />',function(){
    it('should render',function(){
        render(<Button />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('should run a function when user clicks',function(){
        const mockCallBack = jest.fn()
        render(<Button onClick={mockCallBack}/>)
        act(()=>userEvent.click(screen.getByRole('button')))
        expect(mockCallBack.mock.calls.length >0)
    })
    it('should render with a given button name',function(){
        render(<Button value="a" />)
        expect(screen.getByText('a')).toBeInTheDocument()
    })
})