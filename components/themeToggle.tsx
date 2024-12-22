
import React, { useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
};


export default ThemeToggle;
