```jsx
const { useState } = require('react');

const [ value, setValue ] = useState('Hello There');
const onChange = (event) => {
    setValue(event.target.value);
};

<TextField value={value} onChange={onChange} />
```