import React, { createContext, useContext, useRef, useState } from 'react';
const NAVBER_CONTEXT = createContext()

const NavberProvider = ({ children }) => {

    const [activeLink, setActiveLink] = useState(0);

    const ref = useRef(null)
    const handleClick = (index) => {
        console.log(index);
        setActiveLink(index);
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }




    const value = { activeLink, setActiveLink, handleClick, ref }

    return (
        <NAVBER_CONTEXT.Provider value={value}>
            {children}
        </NAVBER_CONTEXT.Provider>
    );
};

export const useSmoothNavber = () => {
    const context = useContext(NAVBER_CONTEXT);
    return context;
}
export default NavberProvider;