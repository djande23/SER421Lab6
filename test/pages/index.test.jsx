import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import React from 'react';
import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';
import Index from "../../pages";
import userEvent from "@testing-library/user-event";
import { DOG_API_URL } from '../../api/useApi';


describe('<Index />', function () {
    beforeAll(()=>{
        enableFetchMocks();
    });
    beforeEach(()=>{
        fetchMock.doMock();
    });

    it('should call the api with no query by default when fetch button is clicked', async function () {
        fetchMock.resetMocks();
        const responseJSON = [{ url: 'foo' }];
        fetchMock.mockResponse(JSON.stringify(responseJSON));
        render(<Index />);
        act(()=>{
            userEvent.click(screen.getByRole('button'))

        });
        const response = await fetchMock.mock.results[0].value;
        await waitFor(()=>expect(screen.getByRole('image-disp')).toBeInTheDocument())
        expect(JSON.parse(response.body.toString())).toStrictEqual(responseJSON);
        expect(fetchMock.mock.calls.length).toBe(1);
    });
    it('should call the api with a query when get by breed is checked', async function () {
        fetchMock.resetMocks();
        const responseJSON = [{ url: 'foo' }];
        fetchMock.mockResponse(JSON.stringify(responseJSON));
        render(<Index />);
        act(()=>userEvent.click(screen.getAllByRole('checkbox')[0]));
        act(()=>userEvent.click(screen.getByRole('button')));
        await waitFor(()=>expect(screen.getByRole('image-disp')).toBeInTheDocument())
        expect(fetchMock.mock.calls.length).toBe(1);
        expect(fetchMock.mock.calls[0][0]).toEqual(DOG_API_URL + '?breed_ids=1');
    });

    it('should render',()=>{
        render(<Index />)
        expect(screen.getByRole('nav-wrapper')).toBeInTheDocument()

    })
    it('should render with style',()=>{
        render(<Index />)
        expect(screen.getByRole('nav-wrapper')).toHaveStyle(`
        margin: auto;
        padding: 40px;
        box-shadow: 0 0 0 1px #EEE;
        width: 1280px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        `)

    })
    it('should render an image',async ()=>{
        render(<Index />)
        act(()=> userEvent.click(screen.getByRole('button')));
        await waitFor(()=>expect(screen.getByRole('image-disp')).toBeInTheDocument())
    })
    it('should render without an image',()=>{
        render(<Index />)
        expect(screen.getByRole('image-none')).toBeInTheDocument()
    })
    it('should render a wrapper for the sidebar',()=>{
        render(<Index />)
        expect(screen.getByRole('sidebar-wrap')).toBeInTheDocument()

    })
    it('should render a wrapper for the sidebar with style',()=>{
        render(<Index />)
        expect(screen.getByRole('sidebar-wrap')).toHaveStyle(`
        max-width: 500px;
        height: 720px;
        `)

    })
    it('should render an infopanel',()=>{
        render(<Index />)
        expect(screen.getByRole('stats-wrapper')).toBeInTheDocument()

    })
    it('should render an UserInputPanel',()=>{
        render(<Index />)
        expect(screen.getByRole('navi-wrapper')).toBeInTheDocument()

    })
});