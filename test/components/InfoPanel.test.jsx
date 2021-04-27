import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {InfoPanel} from "../../src/components";
import userEvent from "@testing-library/user-event";

describe('<InfoPanel',()=>{
    it('Should render',()=>{
        render(<InfoPanel/>)
        expect(screen.getByRole('stats-wrapper')).toBeInTheDocument()
    })
    it('Should render with style',()=>{
        render(<InfoPanel/>)
        expect(screen.getByRole('stats-wrapper')).toHaveStyle(`
        padding-left: 40px;
        height: 50%;
        justify-content: flex-end;
        display: flex;
        flex-direction: column;
        `)
    })
    it('Should render the no info wrapper',()=>{
        render(<InfoPanel/>)
        expect(screen.getByRole('noinfo-wrapper')).toBeInTheDocument()
    })
    it('Should render the no info wrapper with style',()=>{
        render(<InfoPanel/>)
        expect(screen.getByRole('noinfo-wrapper')).toHaveStyle(`
        height: 25%;
        width: 98%;
        display: flex;
        align-items: center;
        justify-content: center;
        `)
    })
    it('Should render the no info div with style',()=>{
        render(<InfoPanel/>)
        expect(screen.getByRole('noinfo-wrapper').firstChild).toHaveStyle(`
        color: #555;
        font-weight: 700;
        font-family: Open Sans,sans-serif;
        `)
    })
    it('Should render the text "no info" ',()=>{
        render(<InfoPanel/>)
        expect(screen.getByRole('noinfo-wrapper')).toHaveTextContent('No Info')
    })
    it('Should render the KeyValueList',()=>{
        let obj = [{
            key: 'key',
            value: 'value'
        },
            {
                key:'Breed',
                value:'Poodle'
            },
            {
                key:'Height',
                value:'13 in'
            },
            {
                key:'Life Span',
                value:'12-15 years'
            }
        ]
        render(<InfoPanel stats={obj}/>)
        expect(screen.getByRole('wrapper-list')).toBeInTheDocument()
    })
    it('Should render 4 KeyValueList pairs',()=>{
        let obj = [{
            key: 'key',
            value: 'value'
        },
            {
                key:'Breed',
                value:'Poodle'
            },
            {
                key:'Height',
                value:'13 in'
            },
            {
                key:'Life Span',
                value:'12-15 years'
            }
        ]
        render(<InfoPanel stats={obj}/>)
        expect(screen.getByRole('wrapper-list').childNodes).toHaveLength(4)
    })
})