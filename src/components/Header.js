import { useEffect, useState } from 'react';
import Logo from '../assets/header-logo.png';

export const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('currentTheme') || 'medium');

    useEffect(() => {
        localStorage.setItem('currentTheme', theme);
        document.documentElement.removeAttribute('class');
        document.documentElement.classList.add(theme);
    }, [theme]);
    return (
        <header>
            <div className='logo'>
                <img src={Logo} alt='' />
                <span>TickTick</span>
            </div>
            <div className='themeSelector'>
                <span onClick={() => setTheme('medium')} className={theme === 'medium' ? 'medium activeTheme' : 'medium'}></span>
                <span onClick={() => setTheme('dark')} className={theme === 'dark' ? 'dark activeTheme' : 'dark'}></span>
                <span onClick={() => setTheme('gradientBlue')} className={theme === 'gradientBlue' ? 'gradientBlue activeTheme' : 'gradientBlue'}></span>
                <span onClick={() => setTheme('gradientGreen')} className={theme === 'gradientGreen' ? 'gradientGreen activeTheme' : 'gradientGreen'}></span>
                <span onClick={() => setTheme('gradientOrange')} className={theme === 'gradientOrange' ? 'gradientOrange activeTheme' : 'gradientOrange'}></span>
            </div>
        </header>
    )
}
