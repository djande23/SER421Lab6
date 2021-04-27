import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { SelectField } from "../../src/components";
import userEvent from "@testing-library/user-event";

describe('<SelectField />',()=>{
    it('Should render a label',()=>{
        render(<SelectField label={'This is a label'} />)
        expect(screen.getByText('This is a label')).toBeInTheDocument()
    })
    it('should render a select',()=>{
        render(<SelectField />)
        expect(screen.getByRole('pet-select')).toBeInTheDocument()
    })
    it('should render a select with style',()=>{
        render(<SelectField />)
        expect(screen.getByRole('pet-select')).toHaveStyle(`
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
        padding: 0 5px;
        `)
    })

    it('should have options in the select',()=>{
        let obj=[
            {
                value:'foo',
                label:'Foo'
            },
            {
                value:'bar',
                label:'Bar'
            }
        ]
        render(<SelectField options = {obj}/>)
        expect(screen.getByRole('pet-select')).toHaveProperty('options')
    })

    it('should have options with style',()=>{
        let obj=[
            {
                value:'foo',
                label:'Foo'
            },
            {
                value:'bar',
                label:'Bar'
            }
        ]
        render(<SelectField options = {obj}/>)
        expect(screen.getByRole('pet-select').childNodes[0]).toHaveStyle(`
        font-family: Open Sans,sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #555;
        `)
    })

    it('should have options in the select',()=>{
        let selectOptions = [<option value={'foo'} key={'foo'}/>,<option value={'bar'} key={'bar'}/>]
        render(<SelectField options={selectOptions}/>)
        expect(screen.getByRole('pet-select').children).toHaveLength(2)
    })
    it('should do something when an option is picked',()=>{
        let obj=[
            {
                value:'foo',
                label:'Foo'
            },
            {
                value:'bar',
                label:'Bar'
            }
        ]
        render(<SelectField options={obj} />)
        userEvent.selectOptions(screen.getByRole('pet-select'),'foo')
        expect(screen.getByRole('pet-select').childNodes[0].selected).toBe(true)

    })

})