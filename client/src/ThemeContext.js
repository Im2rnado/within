import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [lightMode, setLightMode] = useState(localStorage.getItem('theme') === 'light');

    useEffect(() => {
        localStorage.setItem('theme', lightMode ? 'light' : 'dark');
        document.body.className = lightMode ? 'light-mode' : 'dark-mode';
    }, [lightMode]);

    return (
        <ThemeContext.Provider value={{ lightMode, setLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);