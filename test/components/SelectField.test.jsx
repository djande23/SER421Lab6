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
    it('should have options in the select',()=>{
        let selectOptions = [<option value={'foo'} key={'foo'}/>,<option value={'bar'} key={'bar'}/>]
        render(<SelectField children = {selectOptions}/>)
        expect(screen.getByRole('pet-select')).toHaveProperty('options')
    })
    it('should have options in the select',()=>{
        let selectOptions = [<option value={'foo'} key={'foo'}/>,<option value={'bar'} key={'bar'}/>]
        render(<SelectField options={selectOptions}/>)
        expect(screen.getByRole('pet-select').children).toHaveLength(2)
    })

})