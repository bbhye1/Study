import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    }, {
        title: 'Why use React?',
        content: 'React is a favortie JS library among engineers'
    }, {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    { label: 'interaction purple', value: '#EF30F2' },
    { label: 'interaction blue', value: '#79A2F2' },
    { label: 'interaction lightblue', value: '#8DB9F2' },
    { label: 'interaction yellow', value: '#F2D95C' },
    { label: 'interaction lightgray', value: '#F2F2F2' },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Dropdown
                options={options}
                onSelectedChange={setSelected}
                selected={selected} />
        </div>
    )
}

export default App;