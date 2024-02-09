import React, { createContext, useContext, useRef, useState } from 'react';

const NAVBER_CONTEXT = createContext();

const NavberProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState(0);

    // const ref = useRef(null)
    const handleClick = (index) => {
        setActiveLink(index);
        // ref?.current?.scrollIntoView({ behavior: 'smooth' });
        // window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })
    };
    const Introduction = useRef()
    const goSynth = useRef()
    const Features = useRef()
    const Resources = useRef()
    const Revolution = useRef()

    const scrollHandler = (eleRef) => {
        console.log(eleRef.current);
        eleRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    // const value = { activeLink, setActiveLink, handleClick, ref };
    const value = { activeLink, setActiveLink, handleClick, scrollHandler, Introduction, goSynth, Features, Resources, Revolution };

    return (
        <NAVBER_CONTEXT.Provider value={value}>
            {children}
        </NAVBER_CONTEXT.Provider>
    );
};

export const useSmoothNavber = () => {
    const context = useContext(NAVBER_CONTEXT);
    return context;
};

export default NavberProvider;
