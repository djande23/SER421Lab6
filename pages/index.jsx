import React, { useState } from 'react';
import { DOG_API_URL } from '../api/useApi';

export default function Index() {
    const [ checked, setChecked ] = useState(false);

    const handleButtonClick = async () => {
        if(checked) {
            await fetch(DOG_API_URL + '?breed_ids=1');
        } else {
            await fetch('/123');
        }
    };

    return <>
        <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
        <button onClick={handleButtonClick}>Hello</button>
    </>;
}