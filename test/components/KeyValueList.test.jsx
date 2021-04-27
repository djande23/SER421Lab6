import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import {KeyValueList} from "../../src/components";
import userEvent from "@testing-library/user-event";

describe('<KeyValuList/>', () => {
    it('should render a wrapper', () => {
        render(<KeyValueList/>)
        expect(screen.getByRole('wrapper-list')).toBeInTheDocument()
    })
    it('should render a PairWrapper', () => {
        let obj = [{
            key: 'key',
            value: 'value'
        }]
        render(<KeyValueList items={obj}/>)
        expect(screen.getByRole('wrapper-list').children).toHaveLength(1)
    })
    it('should render key/value pairs in a PairWrapper', () => {
        let obj = [
            {
            key: 'key',
            value: 'value'
            },
        ]
        render(<KeyValueList items={obj}/>)
        expect(screen.getByRole('wrapper-list').firstChild.childNodes).toHaveLength(2)
    })
    it('should render a wrapper with style', () => {
        render(<KeyValueList/>)
        expect(screen.getByRole('wrapper-list')).toHaveStyle(`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: start;
        justify-items: start;
        font-family: Open Sans,sans-serif;
        font-size: 16px;
        height: auto; 
        `)
    })
    it('should render a PairWrapper with style', () => {
        let obj = [{
            key: 'key',
            value: 'value'
        }]
        render(<KeyValueList items={obj}/>)
        expect(screen.getByRole('wrapper-list').firstChild).toHaveStyle(`
        padding: 3px 18px 3px 0;
        flex: 1 1 30%;
        `)
    })
    it('should render a key with style', () => {
        let obj = [{
            key: 'key',
            value: 'value'
        }]
        render(<KeyValueList items={obj}/>)
        expect(screen.getByRole('wrapper-list').firstChild.firstChild).toHaveStyle(`
        display: inline;
        color: #555
        font-weight: 700;
        margin-right: 3px;
        `)
    })
    it('should render a value with style', () => {
        let obj = [{
            key: 'key',
            value: 'value'
        }]
        render(<KeyValueList items={obj}/>)
        expect(screen.getByRole('wrapper-list').firstChild.childNodes[1]).toHaveStyle(`
        display: inline;
        color: #555;
        `)
    })
    it('should render key/value pairs that contain a value', () => {
        let obj = [{
            key: 'key',
            value: 'value'
        }]
        render(<KeyValueList items={obj}/>)
        expect(screen.getByRole('wrapper-list').firstChild.childNodes[1]).toHaveTextContent('key')
    })



})