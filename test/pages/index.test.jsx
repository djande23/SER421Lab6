import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
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
        act(()=>userEvent.click(screen.getByRole('button')));
        const response = await fetchMock.mock.results[0].value;
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
        expect(fetchMock.mock.calls.length).toBe(1);
        expect(fetchMock.mock.calls[0][0]).toEqual(DOG_API_URL + '?breed_ids=1');
    });
});